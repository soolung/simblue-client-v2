import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { accessTokenExpired } from "../../apis/token";

const server = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
});

server.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

server.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.response.data.message);
    if (error.response.status === 401) {
      accessTokenExpired();
    }
    return Promise.reject(error);
  }
);

export default server;
