import type { ChatRepository } from '../../domain/repositories/ChatRepository';
import type  { Message } from '../../domain/entities/Message';
//import { v4 as uuid } from 'uuid';

/**
 * Concrete implementation that calls the backend HTTP endpoint.
 * For now, it fakes the network call so you can work offline.
 */
export class ChatApiRepository implements ChatRepository {
  async send(text: string): Promise<Message> {
    const res = await fetch('http://localhost:8000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: text }),
    });

    if (!res.ok) {
      throw new Error('Failed to get response from server');
    }

    const data = await res.json();
    return data as Message;
  }

}
