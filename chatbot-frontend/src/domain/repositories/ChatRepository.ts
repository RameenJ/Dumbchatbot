import type { Message } from '../entities/Message';

export interface ChatRepository {
  /** Sends the user's text to the backend and returns the bot's reply. */
  send(text: string): Promise<Message>;
}
