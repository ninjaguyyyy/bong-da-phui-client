import { useRouter } from "next/router";
import { ComponentType } from "react";
import { getAccessToken } from "..";

const withAuth = (WrappedComponent: ComponentType) => {
  const MyComponent = (props: any) => {
    const router = useRouter();

    const accessToken = getAccessToken();

    if (!accessToken) {
      router.replace("/login");
      return null;
    }

    return <WrappedComponent {...props} />;
  };
  MyComponent.displayName = "test";
  return MyComponent;
};

export default withAuth;
