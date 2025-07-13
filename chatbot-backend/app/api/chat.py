from fastapi import APIRouter
from app.schemas.chat_schema import ChatRequest, ChatResponse
from app.application.chat_service import generate_bot_reply

router = APIRouter()

@router.post("/", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    return generate_bot_reply(request.message)
