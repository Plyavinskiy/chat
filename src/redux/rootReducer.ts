import { combineReducers } from "@reduxjs/toolkit";
import { chatReducer } from "./features/chat/chatSlice";

export default combineReducers({
  chat: chatReducer,
});
