import { useState } from 'react';
import type { Message } from '../../domain/entities/Message';
import { sendMessageUseCase } from '../../common/container';
import { v4 as uuid } from 'uuid';
import MessageBubble from './MessageBubble';
import InputBar from './InputBar';

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
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((m) => (
          <MessageBubble key={m.id} message={m} />
        ))}
      </div>
      <InputBar onSend={handleSend} />
    </div>
  );
}
