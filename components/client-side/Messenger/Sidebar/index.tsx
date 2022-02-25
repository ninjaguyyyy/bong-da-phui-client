import { useRouter } from "next/router";
import MessengerChatsTab from "./Conversations";
import MessengerContactsTab from "./Contacts";
import { TabOptions } from "..";

const Sidebar = () => {
  const router = useRouter();
  const tab = router.query.tab;

  return (
    <div className="sidebar" id="sidebar">
      <div className="container">
        <div className="col-md-12">
          <div className="tab-content">
            {tab === TabOptions.Contacts && <MessengerContactsTab />}
            {tab === TabOptions.Conversations && <MessengerChatsTab />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
