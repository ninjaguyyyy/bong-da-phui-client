import axios, { AxiosRequestConfig } from "axios";
import queryString from "query-string";
import { ServerURL } from "../constants";
import { getAccessToken } from "../utils";

const axiosClient = axios.create({
  baseURL: ServerURL,
  headers: { "content-type": "application/json" },
  paramsSerializer: function (params) {
    return queryString.stringify(params);
  },
});

axiosClient.interceptors.request.use(function (config: AxiosRequestConfig) {
  const token = getAccessToken();
  if (token) {
    config.headers!.Authorization = `Bearer ${token}`; //NOSONAR
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
