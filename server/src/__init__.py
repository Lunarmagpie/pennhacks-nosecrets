import openai
from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.responses import RedirectResponse
import starlette.status as status
from pydantic import BaseModel
from contextlib import asynccontextmanager

from server.src.google import new_auth_url, authenticate, get_user_email
from server.src.safe_create_task import create_task
from server.src.user import User
from server.src.mongo import MONGO

openai.api_key = "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"


@asynccontextmanager
async def lifespan(app: FastAPI):
    await MONGO.load_users()
    yield


app = FastAPI(lifespan=lifespan)

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

    user = User.from_state(state, email=get_user_email(cred))
    user.cred = cred

    create_task(MONGO.save_user(user))

    return FileResponse("build/index.html")


@app.get("/login")
async def function():
    url = new_auth_url()
    return RedirectResponse(url=url, status_code=status.HTTP_302_FOUND)


class UpdateUser(BaseModel):
    state: str
    phone_number: str | None
    wishlist: str | None
    blacklist: str | None


@app.post("/api/update_user")
async def set_user(data: UpdateUser):
    user = User.from_state(data.state)
    user.phone_number = data.phone_number
    user.whitelist = data.wishlist
    user.blacklist = data.blacklist
    MONGO.save_user(user)
