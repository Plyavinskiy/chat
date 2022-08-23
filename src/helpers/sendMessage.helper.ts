import { v4 as uuidv4 } from "uuid";
import { Dispatch, SetStateAction } from "react";
import { IChat, IChats, IMessage } from "../interfaces/chat.interface";
import { AppDispatch } from "../redux/store";
import { chatAction } from "../redux/features/chat/chatSlice";

const addMessage = (
  message: IMessage,
  chat: IChat,
  dispatch: AppDispatch,
): void => {
  const newChats: IChats = JSON.parse(localStorage.getItem("chats") ?? "{}");

  const idChat: string = chat.chatId;
  const index: number = newChats.chats.findIndex(
    (chatItem) => chatItem.chatId === idChat,
  );
  newChats.chats[index].message.push(message);

  localStorage.setItem("chats", JSON.stringify(newChats));
  dispatch(chatAction.setChats(newChats));
  dispatch(
    chatAction.setChat(newChats.chats.find((value) => value.chatId === idChat)),
  );
};

const send = (
  inputValue: string,
  setInputValue: Dispatch<SetStateAction<string>>,
  dispatch: AppDispatch,
  chat: IChat,
  newResponse: string,
): void => {
  if (inputValue) {
    const newMessage: IMessage = {
      messageId: uuidv4(),
      authorMessage: "ownMessage",
      date: new Date().toString(),
      value: inputValue,
    };

    addMessage(newMessage, chat, dispatch);

    setTimeout(() => {
      dispatch(chatAction.getJoke());
      const response: IMessage = {
        messageId: uuidv4(),
        authorMessage: chat.userName,
        date: new Date().toString(),
        value: newResponse,
      };

      addMessage(response, chat, dispatch);
    }, 2000);

    setInputValue("");
  }
};

export { addMessage, send };
