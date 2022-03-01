import { NextPage } from "next";
import Messenger from "../components/client-side/Messenger";
import withAuth from "../utils/HOC/withAuth";

const MessengerPage: NextPage = () => {
  return <Messenger />;
};

export default withAuth(MessengerPage);
