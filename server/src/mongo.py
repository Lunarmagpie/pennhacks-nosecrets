from motor import motor_asyncio

from server.src.user import User


USER = "bonsaidb"
PASSWORD = "b0P3GyIDgGZyq1dj"


class Mongo:
    def __init__(self) -> None:
        self.client = motor_asyncio.AsyncIOMotorClient(
            f"mongodb+srv://{USER}:{PASSWORD}@cluster0.bxfgywb.mongodb.net/?retryWrites=true&w=majority"
        )
        self.database = self.client.get_default_database()

    async def load_users(self) -> list[User]:
        """Load all of the users that are currently in the database."""

    async def save_user(self, user: User):
        self.database.command({})

    async def save_newest_snip(
        self, *, user: User, email: str, summary: str, link: str
    ):
        """Save the newest snip for a user to the database."""

    async def fetch_snips(self, user: User) -> list[tuple(str, str, str)]:
        """Load the top 100 most recent snips for a user"""


MONGO = Mongo()
