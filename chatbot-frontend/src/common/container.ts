import { ChatApiRepository } from '../infrastructure/api/ChatApiRepository';
import { SendMessageUseCase } from '../application/SendMessageUseCase';

const chatRepo = new ChatApiRepository();
export const sendMessageUseCase = new SendMessageUseCase(chatRepo);
