from pydantic import BaseModel
from app.domain.models import Message

class ChatRequest(BaseModel):
    message: str


class ChatResponse(Message):
    pass
