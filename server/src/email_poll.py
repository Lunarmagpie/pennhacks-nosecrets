import asyncio
import datetime
import logging
import traceback

from server.src.user import User
from server.src.google import Email, get_emails
from server.src.safe_create_task import create_task
from server.src.text import text_email

logger = logging.getLogger(__name__)


class EmailPoll:
    def __init__(self, user: User) -> None:
        self.user = user
        self.tracked_emails = set()

    async def start(self):
        print("STARTING")
        while True:
            try:
                print("HERE")
                recent_emails = get_emails(
                    self.user.cred,
                    after=datetime.datetime.now() - datetime.timedelta(seconds=15),
                )

                emails = list(
                    filter(
                        lambda email: email not in self.tracked_emails, recent_emails
                    )
                )

                print(emails)

                for email in emails:
                    self.tracked_emails.add(email)
                    create_task(self.on_new_email(email))

                await asyncio.sleep(10)
            except Exception as e:
                traceback.print_exception(e)

    async def on_new_email(self, email: Email):
        logger.debug(email)
        await text_email(self.user, email)
