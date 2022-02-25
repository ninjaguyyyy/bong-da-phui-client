import { useRouter } from "next/router";
import { useEffect } from "react";
import io from "socket.io-client";
import { SocketURL } from "../../../constants";

let socket;

const Messenger = () => {
  const router = useRouter();
  console.log(router.query);

  useEffect(() => {
    socket = io(SocketURL, { transports: ["websocket"] });
  }, [router.query]);

  return <>messenger</>;
};

export default Messenger;
