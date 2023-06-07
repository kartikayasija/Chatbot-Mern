import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";

const ChatBody: React.FC = () => {
  // const messages = [
  //   { content: "Hello!", type: "incoming" },
  //   { content: "Hi there!", type: "outgoing" },
  //   { content: "How are you?", type: "incoming" },
  // ];

  const {messages} = useContext(MessageContext)
  return (
    <div className="chat-body">
      {messages.map((message, index) => {
        if (message.type === "incoming") {
          return <div key={index}>{message.content}</div>;
        } else if (message.type === "outgoing") {
          return <div key={index} className="outgoing">{message.content}</div>;
        }
        return null;
      })}
    </div>
  );
};
export default ChatBody;
