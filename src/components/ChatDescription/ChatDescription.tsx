import { FC } from "react";
import { IChat } from "../../interfaces/chat.interface";
import UserImage from "../UserImage/UserImage";
import useChatDescription from "./useChatDescription";
import "./ChatDescription.css";

interface IProps {
  chat: IChat;
}

const ChatDescription: FC<IProps> = ({ chat }) => {
  const { userImage, userName, smallMessage, smallDate, selectChat } =
    useChatDescription(chat);

  return (
    <div
      className="chatDescription"
      onClick={selectChat}
      onKeyDown={selectChat}
      role="button"
      tabIndex={0}
    >
      <div>
        <UserImage userImage={userImage} isActiveStatus />
        <div>
          <h3>{userName}</h3>
          <p>{smallMessage}</p>
        </div>
      </div>
      <p>{smallDate}</p>
    </div>
  );
};

export default ChatDescription;
