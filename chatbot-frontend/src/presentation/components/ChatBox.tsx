import { useState } from 'react';
import type { Message } from '../../domain/entities/Message';
import { sendMessageUseCase } from '../../common/container';
import { v4 as uuid } from 'uuid';
import MessageBubble from './MessageBubble';
import InputBar from './InputBar';
import './ChatBox.css'; 

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = async (text: string) => {
    const userMsg: Message = {
      id: uuid(),
      sender: 'user',
      text,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const botMsg = await sendMessageUseCase.execute(text);
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
  <div className="chatbox">
    <div className="messages">
      {messages.map((m) => (
        <MessageBubble key={m.id} message={m} />
      ))}
    </div>
    <InputBar onSend={handleSend} />
  </div>

  );
}

/*    <div className="flex flex-col flex-1 space-y-2 overflow-hidden">
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((m) => (
          <MessageBubble key={m.id} message={m} />
        ))}
      </div>
      <InputBar onSend={handleSend} />
    </div>
  ); */