import { FC } from "react";
import { IMessage } from "../../interfaces/chat.interface";
import UserImage from "../UserImage/UserImage";
import generateTimeMessage from "../../helpers/message.helper";
import "./Message.css";

interface IProps {
  userImage: string;
  message: IMessage;
}

const ownMessage = "ownMessage";

const Message: FC<IProps> = ({ message, userImage }) => {
  const { value: userMessage, authorMessage: author, date } = message;

  const isOwnMessage = author === ownMessage;
  const messageClass = isOwnMessage ? "ownMessage" : "interlocutorMessage";

  return (
    <div className={`message ${messageClass}`}>
      {!isOwnMessage && (
        <UserImage userImage={userImage} isActiveStatus={false} />
      )}

      <div className="messageAndDateBlock">
        <p className="messageValue">{userMessage}</p>

        <p className="messageDate">{generateTimeMessage(date)}</p>
      </div>
    </div>
  );
};

export default Message;
