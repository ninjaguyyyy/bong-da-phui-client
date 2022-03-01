import axiosClient from "./axios-client";

type LoginWithGoogleResponse = {
  tokens?: {
    access: {
      token: string;
      expires: Date;
    };
    refresh: {
      token: string;
      expires: string;
    };
  };
  message?: string;
};

export const authService = {
  loginWithGoogle: (idToken: string): Promise<LoginWithGoogleResponse> => {
    const url = "api/auth/login/with-google";
    return axiosClient.post(url, { idToken });
  },
};
