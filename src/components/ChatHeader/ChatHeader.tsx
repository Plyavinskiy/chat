import UserImage from "../UserImage/UserImage";
import { useAppSelector } from "../../hooks/redux.hook";
import { getChat } from "../../redux/features/chat/chatSelectors";
import "./ChatHeader.css";

const ChatHeader = () => {
  const { chat } = useAppSelector(getChat);

  return (
    <div className="chatHeader">
      <UserImage userImage={chat.userImage} isActiveStatus />
      <h2>{chat.userName}</h2>
    </div>
  );
};

export default ChatHeader;
