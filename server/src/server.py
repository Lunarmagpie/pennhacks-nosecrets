from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import openai

app = FastAPI()


origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

openai.api_key = "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"


@app.get("/")
async def root():
    return {"message": "Hey How are you? Why are you here?"}


@app.post("/summarize/")
async def summarize_email(email_text: str, category: str):
    prompt = (
        f"Can you please summarize this email based on the category {category}?\n {email_text}\n"
    )
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=300,
    )
    return {"summary": response.choices[0].text.strip().lower()}


@app.get("/identify/")
async def identify_fields(email_text: str, categories: str):
    prompt = (
        f"Which category among the followings {categories} does this email belong to? \n {email_text}\n"
    )
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=300,
    )
    return {"category": response.choices[0].text.strip().lower()}


@app.get("/is_spam/")
async def is_spam(email_text: str):
    prompt = (
        f"Is the following email spam or not?\n\n{email_text}\n\n. If spam say Yes else say No\n"
    )
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=300,
    )
    return {"is_spam": response.choices[0].text.strip()}
