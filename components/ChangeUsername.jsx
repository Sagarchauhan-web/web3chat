import { useMoralis } from "react-moralis";

function ChangeUsername() {
  const { isUserUpdating, user, setUserData, userError } = useMoralis();

  const setUsername = () => {
    const username = prompt(
      `Enter your new username (current: ${user.getUsername()})`
    );

    if (!username) return;

    setUserData({
      username,
    });
  };

  return (
    <div className="absolute top-5 text-sm right-5">
      <button
        disabled={isUserUpdating}
        onClick={setUsername}
        className="hover:text-pink-700"
      >
        change Your username
      </button>
    </div>
  );
}

export default ChangeUsername;
