import React, { useEffect, useContext } from "react";
import io from "socket.io-client";
import { MessageContext } from "../context/MessageContext";

const MessageReceiver: React.FC = () => {
  const { addMessage } = useContext(MessageContext);

  useEffect(() => {
    const socket = io("/socket.io");
    socket.emit("join chat");
    let counter=0;
    socket.on("message", async (msg: string) => {
      if (msg !== "") {
        counter++;
        setTimeout(() => {
          addMessage({content:msg, type:'incoming'})
        }, counter*1000);
      }
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return null;
};

export default MessageReceiver;
