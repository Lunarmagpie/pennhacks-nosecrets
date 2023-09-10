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

    def save_user(self, user: User):
        self.database.command(
            {
                
            }
        )


MONGO = Mongo()
