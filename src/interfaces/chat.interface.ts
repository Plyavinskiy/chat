export interface IMessage {
  messageId: string;
  value: string;
  date: string;
  authorMessage: string;
}

export interface IChat {
  chatId: string;
  userName: string;
  userImage: string;
  isActiveStatus: boolean;
  message: IMessage[];
}

export interface IUserAvatar
  extends Pick<IChat, "userImage" | "isActiveStatus"> {}

export interface IChats {
  chats: IChat[];
}
