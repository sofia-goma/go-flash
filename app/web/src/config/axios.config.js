import axios from "axios";
import appConfig from "./app.config";

const axiosInstance = axios.create({
   baseURL: appConfig.BACKEND_API_URL,
});

axiosInstance.interceptors.request.use(
   (config) => {
      const token = localStorage.getItem("accessToken") || sessionStorage.getItem("accessToken");
      if (token) {
         config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
   },
   (error) => {
      return Promise.reject(error);
   }
);

export default axiosInstance;