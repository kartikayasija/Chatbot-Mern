import { ReactNode, createContext, useState } from "react";

type MessageType = {
  content: string;
  type: "incoming" | "outgoing";
};
type MessageContextType = {
  messages: MessageType[];
  addMessage: (message: MessageType) => void;
};
type MessageProviderProps = {
  children: ReactNode;
};

export const MessageContext = createContext<MessageContextType>({
  messages: [],
  addMessage: () => {},
});

export const MessageProvider: React.FC<MessageProviderProps> = ({
  children,
}) => {
  const [messages, setMessages] = useState<MessageType[]>([]);

  const addMessage = (message: MessageType) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <MessageContext.Provider
      value={{ messages, addMessage } as MessageContextType}
    >
      {children}
    </MessageContext.Provider>
  );
};
