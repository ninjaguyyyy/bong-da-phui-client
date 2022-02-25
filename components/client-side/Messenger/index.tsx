import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import { SocketURL } from "../../../constants";
import Sidebar from "./Sidebar";
import MessengerNavigation from "./Navigation";
import ConversationDetail from "./ConversationDetail";

let socket;

export enum TabOptions {
  Contacts = "contacts",
  Conversations = "conversations",
}

const Messenger = () => {
  const router = useRouter();

  // useEffect(() => {
  //   socket = io(SocketURL, { transports: ["websocket"] });
  // }, [router.query]);

  return (
    <main className="messenger">
      <div className="layout">
        <MessengerNavigation />
        <Sidebar />
        <ConversationDetail />
      </div>
    </main>
  );
};

export default Messenger;
