from __future__ import annotations

import dataclasses

from google.oauth2.credentials import Credentials

USERS = {}

@dataclasses.dataclass
class User:
    state: str

    phone_number: str | None = None
    cred: Credentials | None = None

    # User provided catagories that they want to see.
    catagories: list[str] = dataclasses.field(default_factory=list)
    language: str | None = None

    def __post_init__(self):
        USERS[self.state] = self

    @staticmethod
    def from_state(state: str) -> User:
        if state in USERS:
            return USERS[state]
        return User(state=state)
