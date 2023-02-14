import axios from "axios";
import { accessTokenExpired } from "../../apis/token";

const server = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
});

server.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

server.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    console.log(error.response.data.message);
    if (error.response.status === 401) {
      accessTokenExpired();
    }
    return Promise.reject(error);
  }
);
export default server;
