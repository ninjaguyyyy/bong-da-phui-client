import { NextPage } from "next";
import Router from "next/router";
import LoginComponent from "../components/login";
import { getAccessToken } from "../utils";

const LoginPage: NextPage = () => {
  const token = getAccessToken();

  if (token) {
    alert("You are logged in");
    Router.replace("/");
    return null;
  }
  return <LoginComponent />;
};

export default LoginPage;
