import axiosClient from "../services/axios-client";

export const fetcher = (url: string) =>
  axiosClient.get(url).then((res) => res.data);
