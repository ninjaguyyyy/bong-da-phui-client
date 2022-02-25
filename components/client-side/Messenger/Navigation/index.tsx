import Image from "next/image";
import { TabOptions } from "..";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MessengerNavigation = () => {
  const router = useRouter();

  const [tab, setTab] = useState(TabOptions.Conversations);

  const navigateTab = (tab: TabOptions) => {
    router.query.tab = tab;
    router.push({ pathname: router.pathname, query: { ...router.query } });
  };

  useEffect(() => {
    navigateTab(tab);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  const setClassIcon = (desireTab: TabOptions) =>
    desireTab === tab ? "material-icons active" : "material-icons";

  return (
    <div className="navigation">
      <div className="container">
        <div className="inside">
          <div className="nav nav-tab menu">
            <button
              className="btn"
              style={{
                height: "120px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Image
                className="avatar-xl w-50"
                src="/img/avatars/avatar-male-1.jpg"
                alt="avatar"
                width={100}
                height={100}
              />
            </button>
            <a
              href="#!"
              data-toggle="tab"
              onClick={() => setTab(TabOptions.Contacts)}
            >
              <i className={setClassIcon(TabOptions.Contacts)}>
                account_circle
              </i>
            </a>
            <a
              href="#!"
              data-toggle="tab"
              onClick={() => setTab(TabOptions.Conversations)}
            >
              <i className={setClassIcon(TabOptions.Conversations)}>
                chat_bubble_outline
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessengerNavigation;
