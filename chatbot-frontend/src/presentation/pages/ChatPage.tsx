import ChatBox from '../components/ChatBox';

export default function ChatPage() {
  return (
    <main className="h-screen flex justify-center items-center bg-gray-50">
      <section className="w-full max-w-md h-[600px] bg-white rounded-2xl shadow-xl overflow-hidden">
        <ChatBox />
      </section>
    </main>
  );
}
