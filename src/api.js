import axios from "axios";
import { useAuth } from "./authContext";
const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
});
  

axiosInstance.interceptors.request.use(
    (config) => {
      const {token } = useAuth()
      console.log(token)
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);
  

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        console.error("Unauthorized! Redirecting to login...");
      }
      return Promise.reject(error);
    }
);


export default axiosInstance;