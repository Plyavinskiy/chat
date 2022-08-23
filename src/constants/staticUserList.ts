import { v4 as uuidv4 } from "uuid";
import { IChats } from "../interfaces/chat.interface";

import kiraAvatar from "../assets/images/kira.png";
import jackAvatar from "../assets/images/jack.png";
import momAvatar from "../assets/images/mom.png";
import daisyAvatar from "../assets/images/daisy.png";
import dadAvatar from "../assets/images/dad.png";
import mikeAvatar from "../assets/images/mike.png";
import lunaAvatar from "../assets/images/luna.png";
import miaAvatar from "../assets/images/mia.png";
import juliaAvatar from "../assets/images/julia.png";

const staticChat: IChats = {
  chats: [
    {
      chatId: uuidv4(),
      userName: "Kira",
      userImage: kiraAvatar,
      isActiveStatus: true,
      message: [
        {
          messageId: uuidv4(),
          value: "Which is more important to you, your life or me?",
          date: "Thu Aug 10 2022 10:00:00 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "Kira",
        },
        {
          messageId: uuidv4(),
          value: "Before I answer that, let me ask you first.",
          date: "Thu Aug 10 2022 10:01:00 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "ownMessage",
        },
        {
          messageId: uuidv4(),
          value: "Sure",
          date: "Thu Aug 18 2022 10:02:00 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "Kira",
        },
        {
          messageId: uuidv4(),
          value: "Is there a difference between you and my life?",
          date: "Thu Aug 18 2022 10:03:10 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "ownMessage",
        },
      ],
    },
    {
      chatId: uuidv4(),
      userName: "Jack",
      userImage: jackAvatar,
      isActiveStatus: true,
      message: [
        {
          messageId: uuidv4(),
          value: "Can you help me?",
          date: "Thu Aug 18 2022 08:10:00 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "Jack",
        },
        {
          messageId: uuidv4(),
          value: "When?",
          date: "Thu Aug 18 2022 08:10:05 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "ownMessage",
        },
        {
          messageId: uuidv4(),
          value: "This weekend",
          date: "Thu Aug 18 2022 08:10:00 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "Jack",
        },
        {
          messageId: uuidv4(),
          value: "Sure",
          date: "Thu Aug 18 2022 08:10:05 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "ownMessage",
        },
      ],
    },
    {
      chatId: uuidv4(),
      userName: "Mom",
      userImage: momAvatar,
      isActiveStatus: true,
      message: [
        {
          messageId: uuidv4(),
          value: "Mom, I have a new boyfriend.",
          date: "Thu Aug 18 2022 20:10:00 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "ownMessage",
        },
        {
          messageId: uuidv4(),
          value: "And I have a new gun.",
          date: "Thu Aug 18 2022 20:11:25 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "Mom",
        },
        {
          messageId: uuidv4(),
          value: "I don't see how this is connected.",
          date: "Thu Aug 18 2022 20:12:03 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "ownMessage",
        },
        {
          messageId: uuidv4(),
          value: "Hopefully neither will the cops)",
          date: "Thu Aug 18 2022 20:12:14 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "Mom",
        },
      ],
    },
    {
      chatId: uuidv4(),
      userName: "Daisy",
      userImage: daisyAvatar,
      isActiveStatus: true,
      message: [
        {
          messageId: uuidv4(),
          value: "In this job, we need someone who is responsible.",
          date: "Thu Aug 18 2022 17:30:00 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "Daisy",
        },
        {
          messageId: uuidv4(),
          value: "I'm the one you want.",
          date: "Thu Aug 18 2022 17:31:00 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "ownMessage",
        },
        {
          messageId: uuidv4(),
          value:
            "In my last job, every time anything went wrong, they said I was responsible.",
          date: "Thu Aug 18 2022 17:31:05 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "ownMessage",
        },
      ],
    },
    {
      chatId: uuidv4(),
      userName: "Dad",
      userImage: dadAvatar,
      isActiveStatus: true,
      message: [
        {
          messageId: uuidv4(),
          value: "Dad，I'm hungry",
          date: "Thu Aug 18 2022 11:00:50 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "ownMessage",
        },
        {
          messageId: uuidv4(),
          value: "Hi hungry，I'm Dad！",
          date: "Thu Aug 18 2022 11:01:00 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "Dad",
        },
        {
          messageId: uuidv4(),
          value: "Dad, I'm serious.",
          date: "Thu Aug 18 2022 11:02:05 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "ownMessage",
        },
        {
          messageId: uuidv4(),
          value: "No, you're hungry！",
          date: "Thu Aug 18 2022 11:02:35 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "Dad",
        },
        {
          messageId: uuidv4(),
          value: "You're kidding！",
          date: "Thu Aug 18 2022 11:03:01 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "ownMessage",
        },
        {
          messageId: uuidv4(),
          value: "No, I'm Dad)",
          date: "Thu Aug 18 2022 11:03:23 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "Dad",
        },
      ],
    },
    {
      chatId: uuidv4(),
      userName: "Mike",
      userImage: mikeAvatar,
      isActiveStatus: true,
      message: [
        {
          messageId: uuidv4(),
          value: "Let's go to the country this week!",
          date: "Thu Aug 18 2022 14:20:15 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "Mike",
        },
        {
          messageId: uuidv4(),
          value: "Great idea, I'm in",
          date: "Thu Aug 18 2022 19:54:10 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "ownMessage",
        },
      ],
    },
    {
      chatId: uuidv4(),
      userName: "Luna",
      userImage: lunaAvatar,
      isActiveStatus: true,
      message: [
        {
          messageId: uuidv4(),
          value: "When are we going to Barcelona?",
          date: "Thu Aug 18 2022 03:10:21 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "Luna",
        },
        {
          messageId: uuidv4(),
          value: "in October",
          date: "Thu Aug 18 2022 03:10:30 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "ownMessage",
        },
        {
          messageId: uuidv4(),
          value: "Super!!!",
          date: "Thu Aug 18 2022 03:10:35 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "Luna",
        },
      ],
    },
    {
      chatId: uuidv4(),
      userName: "Mia",
      userImage: miaAvatar,
      isActiveStatus: true,
      message: [
        {
          messageId: uuidv4(),
          value: "Knock knock",
          date: "Thu Aug 18 2022 21:21:21 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "Mia",
        },
        {
          messageId: uuidv4(),
          value: "Who's there?",
          date: "Thu Aug 18 2022 21:21:30 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "ownMessage",
        },
        {
          messageId: uuidv4(),
          value: "Someone behind you ;)",
          date: "Thu Aug 18 2022 21:21:37 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "Mia",
        },
      ],
    },
    {
      chatId: uuidv4(),
      userName: "Julia",
      userImage: juliaAvatar,
      isActiveStatus: true,
      message: [
        {
          messageId: uuidv4(),
          value: "Will u go out with me?",
          date: "Thu Aug 18 2022 15:03:00 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "Julia",
        },
        {
          messageId: uuidv4(),
          value: "No",
          date: "Thu Aug 18 2022 15:04:01 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "ownMessage",
        },
        {
          messageId: uuidv4(),
          value: "What if I was the last person on earth?",
          date: "Thu Aug 18 2022 15:04:20 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "Julia",
        },
        {
          messageId: uuidv4(),
          value: "No",
          date: "Thu Aug 18 2022 15:04:30 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "ownMessage",
        },
        {
          messageId: uuidv4(),
          value: "Why not?",
          date: "Thu Aug 18 2022 15:05:00 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "Julia",
        },
        {
          messageId: uuidv4(),
          value: "Because I would be dead",
          date: "Thu Aug 18 2022 15:05:30 GMT+0300 (Eastern European Summer Time)",
          authorMessage: "ownMessage",
        },
      ],
    },
  ],
};

export default staticChat;
