import ChatBox from '../components/ChatBox';
import './ChatPage.css'; 

export default function ChatPage() {
  return (
    <main className="chat-container">
      <section className="chat-box">
        <ChatBox />
      </section>
    </main>
  );
}
