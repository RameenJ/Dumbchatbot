from fastapi import FastAPI
from app.api import chat
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="AI Chatbot API",
    description="An API for interacting with a simple AI chatbot.",
    version="1.0.0",
)

# CORS middleware setup 
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    "http://localhost:5173",
    "http://16.171.24.103"
],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat.router, prefix="/chat", tags=["Chat"])

@app.get("/")
def root():
    return {"message": "Chatbot API is up!"}
