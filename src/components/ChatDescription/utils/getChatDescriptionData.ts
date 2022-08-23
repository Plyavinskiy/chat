import { IMessage } from "../../../interfaces/chat.interface";

const getChatDescriptionData = (message: IMessage[]) => {
  const lastMessage = message[message.length - 1].value;

  const smallMessage =
    lastMessage.length > 45 ? `${lastMessage.slice(0, 45)}...` : lastMessage;

  const lastMessageDate = message[message.length - 1].date;

  const smallDate = new Date(lastMessageDate).toLocaleString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return {
    lastMessage,
    smallMessage,
    lastMessageDate,
    smallDate,
  };
};

export default getChatDescriptionData;
