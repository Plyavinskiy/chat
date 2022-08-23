import "./MessageSending.css";
import useMessageSending from "./useMessageSending";

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
        <img
          src="https://cdn.icon-icons.com/icons2/1509/PNG/512/documentsend_104490.png"
          alt=""
        />
      </button>
    </div>
  );
};

export default MessageSending;
