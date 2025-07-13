import type { ChatRepository } from '../infrastructure/repositories/ChatRepository';
import type { Message } from '../domain/entities/Message';

export class SendMessageUseCase {
  // 1️⃣ declare the field
  private readonly repo: ChatRepository;

  // 2️⃣ assign inside the constructor
  constructor(repo: ChatRepository) {
    this.repo = repo;
  }

  execute = async (userText: string): Promise<Message> => {
    if (!userText.trim()) {
      throw new Error('Message cannot be empty');
    }
    return this.repo.send(userText);
  };
}
