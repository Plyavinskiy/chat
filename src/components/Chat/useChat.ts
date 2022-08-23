import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.hook";
import { chatAction } from "../../redux/features/chat/chatSlice";
import { getChat } from "../../redux/features/chat/chatSelectors";

const useChat = () => {
  const { chats, chat } = useAppSelector(getChat);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (chats.chats.length > 0 && chat.chatId.length < 1) {
      dispatch(chatAction.setChat(chats.chats[0]));
      dispatch(chatAction.getJoke());
    }

    scrollToBottom();
  }, [chats, dispatch, chat]);

  return { chat, messagesEndRef };
};

export default useChat;
