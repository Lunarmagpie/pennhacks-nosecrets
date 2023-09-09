from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.responses import RedirectResponse
import starlette.status as status
from pydantic import BaseModel
import datetime

from server.src.google import get_emails, new_auth_url, authenticate
import openai


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

class Item(BaseModel):
    email: str
    category: list(str)

@app.post("/summarize/")
async def function(item: Item):
    prompt = (
        f"Can you suggest which category among these {item.category.join(', ')} does this email in a line?\n Can you also summarize this email in another line: {item.email}\n"
    )

    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=300,
    ).choices[0].text.strip().lower()

    res = response.split("\n")
    category = res[0]

    for cat in item.category():
        if(cat in category):
            category = cat

    return {"category": category, "summary": res[1:].join('\n')}