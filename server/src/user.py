import dataclasses

from google.oauth2.credentials import Credentials


@dataclasses.dataclass
class User:
    phone_number: str | None = None
    cred: Credentials | None = None
