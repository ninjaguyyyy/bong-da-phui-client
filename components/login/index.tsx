import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import GoogleLogin from "react-google-login";
import { GoogleClientId } from "../../constants";
import { authService } from "../../services";
import { setAccessToken } from "../../utils";

export default function LoginComponent() {
  const router = useRouter();

  const responseGoogle = async (response: any) => {
    const { tokens, message } = await authService.loginWithGoogle(
      response.tokenId
    );

    if (tokens) {
      setAccessToken(tokens?.access.token);
      router.push("/");
    }
    message && console.log(message);
  };

  return (
    <div className="main order-md-1">
      <div className="start">
        <div className="container">
          <div className="col-md-12">
            <div className="content">
              <h1>
                Sign in to <Link href="/">Phui</Link>
              </h1>
              <div className="third-party">
                <GoogleLogin
                  clientId={GoogleClientId}
                  render={(renderProps) => (
                    <button
                      className="btn item bg-blue"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      <FaGoogle color="white" size={30} />
                    </button>
                  )}
                  onSuccess={responseGoogle}
                  onFailure={() => {}}
                  cookiePolicy={"single_host_origin"}
                />

                <button className="btn item bg-teal">
                  <FaFacebookF color="white" size={30} />
                </button>
              </div>
              ,
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
