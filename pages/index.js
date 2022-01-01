import Head from "next/head";
import { useMoralis } from "react-moralis";
import Avatar from "../components/Avatar";
import { Header } from "../components/Header";
import Login from "../components/Login";
import Messages from "../components/Messages";

export default function Home() {
  const { isAuthenticated, username } = useMoralis();

  if (!isAuthenticated) {
    return <Login />;
  }
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
      <Head>
        <title>Blockchain</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto max-width-screen-2xl">
        <Header />
        <Messages />
      </div>
    </div>
  );
}
