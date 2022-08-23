import { IMessage } from "../../interfaces/chat.interface";
import Message from "../Message/Message";
import useChat from "./useChat";
import "./Chat.css";

const Chat = () => {
  const { chat, messagesEndRef } = useChat();

  return (
    <div className="chat">
      {chat.message.map((message: IMessage) => (
        <Message
          key={message.messageId}
          message={message}
          userImage={chat.userImage}
        />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Chat;
