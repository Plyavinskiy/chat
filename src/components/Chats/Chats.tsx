import { IChat } from "../../interfaces/chat.interface";
import useChats from "./useChats";
import ChatDescription from "../ChatDescription/ChatDescription";
import "./Chats.css";

const Chats = () => {
  const { chats } = useChats();

  return (
    <div className="chats">
      {chats.chats.map((chat: IChat) => (
        <ChatDescription key={chat.chatId} chat={chat} />
      ))}
    </div>
  );
};

export default Chats;
