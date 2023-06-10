import { useContext, useRef, useEffect } from "react";
import { MessageContext } from "../context/MessageContext";

const ChatBody: React.FC = () => {
  const { messages } = useContext(MessageContext);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  };

  return (
    <div className="chat-body" ref={chatBodyRef}>
      <div className="incoming">
        <img src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_300,w_300,f_auto,q_auto/4143764/325500_63061.png" />
      </div>
      {messages &&
        messages.map((message, index) => (
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
