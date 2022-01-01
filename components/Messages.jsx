import { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessages from "./SendMessages";

// duration
const MINS_DURATION = 15;

function Messages() {
  const { user } = useMoralis();
  const endOfMessages = useRef();
  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    { live: true }
  );

  console.log(data);

  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </div>

      <div className="space-y-4 p-4">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>

      <div className="flex justify-center">
        <SendMessages endOfMessages={endOfMessages} />
      </div>

      <div ref={endOfMessages} className="text-center text-gray-400 mt-5">
        <p> You're Up to date {user.getUsername()}</p>
      </div>
    </div>
  );
}

export default Messages;
