import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";

const ChatBody: React.FC = () => {
  const { messages } = useContext(MessageContext);

  return (
    <div className="chat-body">
      {messages && messages.map((message, index) => (
        <div
          key={index}
          className={message.type === "outgoing" ? "outgoing" : "incoming"}
        >
          {message.content}
        </div>
      ))}
    </div>
  );
};
export default ChatBody;
