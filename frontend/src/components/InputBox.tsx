import { useState, ChangeEvent, KeyboardEvent, useContext } from "react";
import { MessageContext } from "../context/MessageContext";

const InputBox: React.FC = () => {
  const [input, setInput] = useState<string | null>(null);

  const { addMessage } = useContext(MessageContext);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (input === null) return;

    if (e.key === "Enter") {
      addMessage({ content: input, type: "outgoing" });
      setInput(null);
    }
  };
  return (
    <div className="input">
      <input
        type="text"
        value={input || ''}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default InputBox;
