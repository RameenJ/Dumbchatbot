import { useState } from 'react';

interface Props {
  onSend: (text: string) => void;
}

export default function InputBar({ onSend }: Props) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSend(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex p-3 border-t">
      <input
        className="flex-1 border rounded-l px-3 py-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message…"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-r"
      >
        Send
      </button>
    </form>
  );
}
