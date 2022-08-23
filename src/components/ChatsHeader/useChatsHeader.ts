import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/redux.hook";
import { chatAction } from "../../redux/features/chat/chatSlice";

const useChatsHeader = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useAppDispatch();

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const search = (): void => {
    if (inputValue) {
      dispatch(
        chatAction.setChats(JSON.parse(localStorage.getItem("chats") ?? "{}")),
      );
      dispatch(chatAction.searchChatByName(inputValue));
      setInputValue("");
    }
  };

  const keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      search();
    }
  };

  return { inputValue, change, keyPress };
};

export default useChatsHeader;
