from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.responses import RedirectResponse
import starlette.status as status

import datetime

from server.google import get_emails, new_auth_url, authenticate


app = FastAPI()

app.mount("/static", StaticFiles(directory="build/static"), name="static")


@app.get("/profile")
async def index(
    state: str | None = None, code: str | None = None, scope: str | None = None
):
    """
    Args:
        state:
            The client ID that we passed into flow when we created it?
        code:
            The refresh token.
        scope:
            The valid scopes.
    """
    print(
        get_emails(
            await authenticate(state, code),
            after=datetime.datetime.now() - datetime.timedelta(hours=24),
        )
    )


@app.get("/login")
async def function():
    url = new_auth_url()
    return RedirectResponse(url=url, status_code=status.HTTP_302_FOUND)
