import { useState } from "react";
import { useMoralis } from "react-moralis";
import Messages from "./Messages";

function SendMessages({ endOfMessages }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {
          // the object was saved successfully}
        },
        (err) => {
          // the save failed
          //error is a moralis.error with an error code and message
          console.log(err.message);
        }
      );

    endOfMessages.current.scrollIntoView({ behavior: "smooth" });

    setMessage("");
  };

  return (
    <form className="flex fixed bottom-10 bg-black opacity-85 w-11/12 px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-blue-500">
      <input
        type="text"
        placeholder={`Enter a message ${user.getUsername()}...`}
        className="bg-transparent text-white placeholder-gray-500 pr-5 flex-grow outline-none"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="text-pink-500 font-bold"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessages;
