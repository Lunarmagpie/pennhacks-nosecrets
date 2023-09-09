import openai
from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.responses import RedirectResponse
import starlette.status as status
from pydantic import BaseModel

from server.src.google import new_auth_url, authenticate
from server.src.safe_create_task import create_task
from server.src.email_poll import EmailPoll
from server.src.user import User

openai.api_key = "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"
app = FastAPI()

app.mount("/bonsai.svg", FileResponse("build/bonsai.svg"))
app.mount("/favicon.ico", FileResponse("build/favicon.ico"))
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

    user = User.from_state(state)
    user.cred = cred

    create_task(EmailPoll(user).start())
    return FileResponse("build/index.html")


@app.get("/login")
async def function():
    url = new_auth_url()
    return RedirectResponse(url=url, status_code=status.HTTP_302_FOUND)


class SetPhonenumber(BaseModel):
    state: str
    phone_number: str | None


@app.post("/api/set/phone_number")
async def set_user(data: SetPhonenumber):
    user = User.from_state(data.state)
    user.phone_number = data.phone_number


class SetLanguage(BaseModel):
    state: str
    language: str | None


@app.post("/api/set/language")
async def set_language(data: SetLanguage):
    user = User.from_state(data.state)
    user.language = data.language


class SetCategories(BaseModel):
    state: str
    items: list[str]


@app.post("/api/set/whitelist")
async def set_whitelist(data: SetCategories):
    user = User.from_state(data.state)
    user.whitelist = data.items

@app.post("/api/set/blacklist")
async def set_blacklist(data: SetCategories):
    user = User.from_state(data.state)
    user.blacklist = data.items

