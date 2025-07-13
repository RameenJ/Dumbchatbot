from app.domain.models import Message, Sender
from uuid import uuid4
from datetime import datetime

def generate_bot_reply(user_input: str) -> Message:
    # In the future, connect to an LLM here
    return Message(
        id=str(uuid4()),
        sender=Sender.bot,
        text="Hi, I’m your AI assistant. How may I help you?",
        timestamp=int(datetime.now().timestamp() * 1000),
    )
