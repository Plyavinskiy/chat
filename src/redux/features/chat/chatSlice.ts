import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { IChat, IChats } from "../../../interfaces/chat.interface";
import IJoke from "../../../interfaces/joke.interface";
import jokeService from "../../../services/joke.service";

interface IState {
  chats: IChats;
  chat: IChat;
  newResponse: string;
}

const initialState: IState = {
  chats: { chats: [] },
  chat: {
    chatId: "",
    message: [],
    userImage: "",
    isActiveStatus: false,
    userName: "User Name",
  },
  newResponse: "",
};

const getJoke = createAsyncThunk<IJoke, void>(
  "chatSlice/getJoke",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await jokeService.gerRandomJoke();
      return data;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.response?.data);
    }
  },
);

const chatSlice = createSlice({
  name: "chatSlice",
  initialState,
  reducers: {
    setChats: (state, action) => {
      state.chats = action.payload;
      state.chats.chats.sort((a, b) => {
        return (
          new Date(b.message[b.message.length - 1].date).getTime() -
          new Date(a.message[a.message.length - 1].date).getTime()
        );
      });
    },
    searchChatByName: (state, action) => {
      state.chats.chats = state.chats.chats.filter((value) => {
        return value.userName
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });
    },
    setChat: (state, action) => {
      state.chat = action.payload;
    },
    addMessageToTheChat: (state, action) => {
      state.chat.message.push(action.payload);
    },
  },
  extraReducers: (builder) =>
    builder.addCase(getJoke.fulfilled, (state, action) => {
      state.newResponse = action.payload.value;
    }),
});

const {
  reducer: chatReducer,
  actions: { setChats, searchChatByName, setChat, addMessageToTheChat },
} = chatSlice;

const chatAction = {
  setChats,
  searchChatByName,
  setChat,
  addMessageToTheChat,
  getJoke,
};

export { chatReducer, chatAction };
