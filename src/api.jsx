import axios from "axios";
import { useAuth } from "./authContext";

  
const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
});



export const useAxios = () => {
  const { token } = useAuth();
  axiosInstance.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  return axiosInstance;
};
