from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from pydantic import BaseModel

app = FastAPI()

app.mount("/static", StaticFiles(directory="build/static"), name="static")


@app.get("/")
async def function():
    response = FileResponse("build/index.html")
    response.headers["Cross-Origin-Opener-Policy"] = "same-origin-allow-popups"
    return response


class Credentials(BaseModel):
    credential: str
    client_id: str


@app.post("/api/login/")
async def token(info: Credentials):
    print(info)
