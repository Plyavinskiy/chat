import "./MessageSending.css";
import useMessageSending from "./useMessageSending";
import send from "../../assets/images/send.png";

const MessageSending = () => {
  const { handleChange, handleSendButtonClick, handleKeyPress, inputValue } =
    useMessageSending();

  return (
    <div className="messageSending">
      <input
        type="text"
        placeholder="Type your message"
        onKeyPress={handleKeyPress}
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleSendButtonClick} type="button">
        <img src={send} alt="Send button" />
      </button>
    </div>
  );
};

export default MessageSending;
