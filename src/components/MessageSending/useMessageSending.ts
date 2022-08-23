import React, { useState } from "react";
import { send } from "../../helpers/sendMessage.helper";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.hook";
import { getChat } from "../../redux/features/chat/chatSelectors";

const useMessageSending = () => {
  const { chat, newResponse } = useAppSelector(getChat);

  const [inputValue, setInputValue] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendButtonClick = (): void => {
    send(inputValue, setInputValue, dispatch, chat, newResponse);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      send(inputValue, setInputValue, dispatch, chat, newResponse);
    }
  };

  return {
    handleChange,
    handleSendButtonClick,
    handleKeyPress,
    inputValue,
  };
};

export default useMessageSending;
