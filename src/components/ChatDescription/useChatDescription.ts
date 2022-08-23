import { IChat } from "../../interfaces/chat.interface";
import { useAppDispatch } from "../../hooks/redux.hook";
import getChatDescriptionData from "./utils/getChatDescriptionData";
import { chatAction } from "../../redux/features/chat/chatSlice";

const useChatDescription = (chat: IChat) => {
  const { userImage, userName, message } = chat;
  const dispatch = useAppDispatch();

  const { smallMessage, smallDate } = getChatDescriptionData(message);

  const selectChat = (): void => {
    dispatch(chatAction.setChat(chat));
  };

  return {
    userImage,
    userName,
    smallMessage,
    smallDate,
    selectChat,
  };
};

export default useChatDescription;
