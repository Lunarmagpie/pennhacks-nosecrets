from __future__ import annotations

import dataclasses

from google.oauth2.credentials import Credentials

_USERS = {}
_STATE_TO_EMAILS = {}


@dataclasses.dataclass
class User:
    email: str

    phone_number: str | None = None
    cred: Credentials | None = None

    # User provided catagories that they want to see.
    whitelist: list[str] = dataclasses.field(default_factory=list)
    # User provided catagories that they don't want to see.
    blacklist: list[str] = dataclasses.field(default_factory=list)

    language: str | None = None

    def __post_init__(self):
        _USERS[self.email] = self

    @staticmethod
    def from_state(state: str, email: str | None = None) -> User:
        if email is None:
            return User.from_email(_STATE_TO_EMAILS[state])
        u = User(email=email)
        _STATE_TO_EMAILS[state] = email
        _USERS[email] = u
        return u

    @staticmethod
    def from_email(email: str) -> User:
        if email in _USERS:
            return _USERS[email]
        raise Exception("User does not have an email.")


def set_user_email(user: User, email: str) -> None:
    user.email = email
    _STATE_TO_EMAILS[user.state] = email
