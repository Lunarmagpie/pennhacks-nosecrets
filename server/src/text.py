import asyncio
import functools
import openai

from twilio.rest import Client

from server.src.google import Email
from server.src.user import User

ACCOUNT_SID = "AC47543655eaed8d7782356c1f25139c4d"
AUTH_TOKEN = "8544c65d9d7df8065b8c21151212c1ea"
PHONE_NUMBER = "+18339430488"

client = Client(ACCOUNT_SID, AUTH_TOKEN)


async def text_email(user: User, email: Email):
    summary = await summarize(email.subject, email.body)

    if user.language:
        summary = await translate(summary, user.language)

    await asyncio.get_event_loop().run_in_executor(
        None,
        functools.partial(
            client.messages.create,
            to=user.phone_number or "+16316729952",
            from_=PHONE_NUMBER,
            body=f"Email from {email.sender}\n{summary}",
        ),
    )


async def ask_ai(prompt) -> str:
    return (
        (
            await asyncio.get_event_loop().run_in_executor(
                None,
                lambda: openai.Completion.create(
                    engine="text-davinci-003",
                    prompt=prompt,
                    max_tokens=300,
                ),
            )
        )
        .choices[0]
        .text.strip()
    )


async def summarize(subject: str, body: str) -> str:
    return await ask_ai(
        "Summarize this email in as few words as possible."
        f"\nSubject: {subject}"
        f"\nBody: {body}."
    )


async def translate(text: str, language: str) -> str:
    return await ask_ai(f"Translate this text into {language}.\n{text}")
