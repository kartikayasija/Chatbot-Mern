import { useEffect, useState } from "react";
import "./App.scss";
import ChatBody from "./components/ChatBody";
import InputBox from "./components/InputBox";
import ThemeButton from "./components/ThemeButton";
import { MessageProvider } from "./context/MessageContext";
import MessageReceiver from "./components/MessageReceiver";

function App() {
  const [theme, setTheme] = useState<string>("default");
  useEffect(() => {
    const newTheme = localStorage.getItem("theme");
    if (newTheme) setTheme(newTheme);
  });
  return (
    <MessageProvider>
      <div className={`App ${theme}`}>
        <ThemeButton setTheme={setTheme} />
        <MessageReceiver />
        <div className="chat-container">
          <ChatBody />
          <InputBox />
        </div>
      </div>
    </MessageProvider>
  );
}

export default App;
