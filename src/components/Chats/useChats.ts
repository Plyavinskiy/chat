import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.hook";
import staticChat from "../../constants/staticUserList";
import { chatAction } from "../../redux/features/chat/chatSlice";
import { getChat } from "../../redux/features/chat/chatSelectors";

const useChats = () => {
  const { chats } = useAppSelector(getChat);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!localStorage.getItem("chats")) {
      localStorage.setItem("chats", JSON.stringify(staticChat));
    }
    dispatch(
      chatAction.setChats(JSON.parse(localStorage.getItem("chats") ?? "{}")),
    );
  }, [dispatch]);

  return {
    chats,
  };
};

export default useChats;
