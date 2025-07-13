import type { Message } from '../../domain/entities/Message';
import clsx from 'clsx';

interface Props {
  message: Message;
}

export default function MessageBubble({ message }: Props) {
  const isUser = message.sender === 'user';
  return (
    <div
      className={clsx(
        'max-w-xs px-3 py-2 rounded-2xl shadow',
        isUser ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 self-start',
      )}
    >
      {message.text}
    </div>
  );
}
