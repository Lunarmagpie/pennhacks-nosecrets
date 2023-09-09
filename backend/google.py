from __future__ import annotations

import json
import datetime
import traceback
import typing as t
import dataclasses
import base64
import functools

import asyncio

from bs4 import BeautifulSoup
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import Flow
from googleapiclient.discovery import build

SCOPES = ["https://www.googleapis.com/auth/gmail.readonly"]
REDIRECT_URL = "http://localhost:3000/profile"

with open("backend/client_secret.json") as f:
    CLIENT_SECRETS = json.load(f)


flows: dict[str, Flow] = {}


def new_auth_url():
    flow = Flow.from_client_config(CLIENT_SECRETS, SCOPES, redirect_uri=REDIRECT_URL)
    url, client_state = flow.authorization_url()
    flows[client_state] = flow
    return url


async def authenticate(state: str, code: str) -> Credentials:
    flow = flows[state]

    token = await asyncio.get_event_loop().run_in_executor(
        None, functools.partial(flow.fetch_token, code=code)
    )
    return Credentials.from_authorized_user_info(flow.client_config | token)


def get_emails(creds: Credentials, *, after: datetime.datetime) -> list[Email]:
    creds.refresh(Request())

    # Call the Gmail API
    service = build("gmail", "v1", credentials=creds)
    results = service.users().messages().list(userId="me", maxResults=5).execute()
    messages = results.get("messages")

    emails = []

    for msg in messages:
        txt = service.users().messages().get(userId="me", id=msg["id"]).execute()

        time: int = datetime.datetime.fromtimestamp(int(txt["internalDate"][:-3]))
        print(time)

        try:
            emails.append(Email.from_json(txt))
        except Exception as e:
            print("Failed parisng email")
            traceback.print_exception(e)

        if time < after:
            return emails


    return emails


@dataclasses.dataclass
class Email:
    # time_sent: datetime.datetime
    sender: str
    subject: str
    body: str

    @classmethod
    def from_json(cls, email: dict) -> t.Self:
        def get_header(name: str) -> str:
            for d in email["payload"]["headers"]:
                if d["name"] == name:
                    return d["value"]

        # time_sent = datetime.datetime(int(email["internalDate"]))
        sender = get_header("From")
        subject = get_header("Subject")

        parts = email["payload"]["parts"][0]
        data = parts["body"]["data"]
        data = data.replace("-", "+").replace("_", "/")
        decoded_data = base64.b64decode(data)

        # Now, the data obtained is in lxml. So, we will parse
        # it with BeautifulSoup library
        soup = BeautifulSoup(decoded_data, "lxml")
        body = soup.body()

        return Email(
            # time_sent=time_sent,
            sender=sender,
            subject=subject,
            body=body,
        )
