import UserImage from "../UserImage/UserImage";
import useChatsHeader from "./useChatsHeader";
import "./ChatsHeader.css";

const ChatsHeader = () => {
  const { inputValue, change, keyPress } = useChatsHeader();

  return (
    <div className="chatsHeader">
      <UserImage userImage="" isActiveStatus />

      <input
        className="searchInput"
        type="text"
        onKeyPress={keyPress}
        value={inputValue}
        onChange={change}
        placeholder="Search or start new chat"
      />
    </div>
  );
};

export default ChatsHeader;
