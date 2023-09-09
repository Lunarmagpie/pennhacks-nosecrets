import asyncio
import functools

from twilio.rest import Client

from server.src.google import Email
from server.src.user import User

ACCOUNT_SID = "AC47543655eaed8d7782356c1f25139c4d"
AUTH_TOKEN = "8544c65d9d7df8065b8c21151212c1ea"
PHONE_NUMBER = "+18339430488"

client = Client(ACCOUNT_SID, AUTH_TOKEN)


async def text_email(user: User, email: Email):
    await asyncio.get_event_loop().run_in_executor(
        None,
        functools.partial(
            client.messages.create,
            to=user.phone_number,
            from_=PHONE_NUMBER,
            body=f"Got an email from {email.sender}",
        ),
    )
