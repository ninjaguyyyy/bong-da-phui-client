const ACCESS_TOKEN = "access-token";

export const setAccessToken = (accessToken: string) => {
  localStorage.setItem(ACCESS_TOKEN, accessToken);
};

export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN);
};
