from enum import Enum
from pydantic import BaseModel
from uuid import uuid4
from datetime import datetime


class Sender(str, Enum):
    user = "user"
    bot = "bot"


class Message(BaseModel):
    id: str
    sender: Sender
    text: str
    timestamp: int
