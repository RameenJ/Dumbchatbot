import type { ChatRepository } from '../../domain/repositories/ChatRepository';
import type  { Message } from '../../domain/entities/Message';
import { v4 as uuid } from 'uuid';

/**
 * Concrete implementation that calls the backend HTTP endpoint.
 * For now, it fakes the network call so you can work offline.
 */
export class ChatApiRepository implements ChatRepository {
  async send(_text: string): Promise<Message> {
    // TODO: replace with `fetch('https://your-api.com/chat', { ... })`
    // For the PoC we just resolve immediately.
    return new Promise<Message>((resolve) =>
      setTimeout(
        () =>
          resolve({
            id: uuid(),
            sender: 'bot',
            text: 'Hi, I’m your AI assistant. How may I help you?',
            timestamp: Date.now(),
          }),
        400,
      ),
    );
  }
}
