import Chat from "./components/Chat/Chat";
import Chats from "./components/Chats/Chats";
import HeaderAllChats from "./components/ChatsHeader/ChatsHeader";
import HeaderOneChat from "./components/ChatHeader/ChatHeader";
import SendMessage from "./components/MessageSending/MessageSending";
import "./App.css";
import "./styleMedia/media.css";

const App = () => {
  return (
    <div className="ownBlock">
      <div className="leftSide">
        <HeaderAllChats />
        <div>
          <h2>Chats</h2>
          <Chats />
        </div>
      </div>

      <div className="rightSide">
        <HeaderOneChat />
        <Chat />
        <SendMessage />
      </div>
    </div>
  );
};

export default App;
