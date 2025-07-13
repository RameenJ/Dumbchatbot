from fastapi import FastAPI
from app.api import chat

app = FastAPI()

app.include_router(chat.router, prefix="/chat", tags=["Chat"])

@app.get("/")
def root():
    return {"message": "Chatbot API is up!"}
