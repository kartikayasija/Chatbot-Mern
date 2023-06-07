import { MessageProvider } from "../context/MessageContext";
import MessageReceiver from "../components/MessageReceiver";
import ChatBody from "../components/ChatBody";
import InputBox from "../components/InputBox";
import ProtectedRoute from "../components/ProtectedRoute";

const Chat: React.FC = () => {
  return (
    <ProtectedRoute>
      <MessageProvider>
        <MessageReceiver />
        <div className="chat-container">
          <ChatBody />
          <InputBox />
        </div>
      </MessageProvider>
    </ProtectedRoute>
  );
};
export default Chat;
