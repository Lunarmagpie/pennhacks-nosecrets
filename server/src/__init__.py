from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.responses import RedirectResponse
import starlette.status as status

import openai
from server.src.google import new_auth_url, authenticate
from server.src.safe_create_task import create_task
from server.src.email_poll import EmailPoll
from server.src.user import User


openai.api_key = "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"
app = FastAPI()

app.mount("/bonsai.svg", FileResponse("build/bonsai.svg"))
app.mount("/static", StaticFiles(directory="build/static"), name="static")
app.mount("/images", StaticFiles(directory="build/images"), name="image")


@app.get("/")
async def index():
    return FileResponse("build/index.html")


@app.get("/profile")
async def profile(
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
    cred = await authenticate(state, code)

    user = User(
        phone_number=None,
        cred=cred,
    )

    create_task(EmailPoll(user).start())
    return FileResponse("build/index.html")


@app.get("/login")
async def function():
    url = new_auth_url()
    return RedirectResponse(url=url, status_code=status.HTTP_302_FOUND)



