import dataclasses

from google.oauth2.credentials import Credentials


@dataclasses.dataclass
class User:
    phone_number: str | None = None
    cred: Credentials | None = None

    # User provided catagories that they want to see.
    catagories: list[str] = dataclasses.field(default_factory=list)
    language: str | None = None
