import React, { useEffect,useContext } from "react";
import io from "socket.io-client";
import { MessageContext } from "../context/MessageContext";

const MessageReceiver: React.FC = () => {
  const { addMessage } = useContext(MessageContext);

  useEffect(() => {
    const socket = io("/socket.io");
    socket.on('message',(msg:string)=>{
      if(msg!=='') addMessage({content:msg, type:'incoming'})
    })
    return ()=>{socket.disconnect();}
  }, []);

  return null;
};

export default MessageReceiver;
