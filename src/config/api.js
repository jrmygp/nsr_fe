import axios from "axios";

export const API_URL = process.env.NEXT_PUBLIC_API;

const axiosInstance = axios.create({
  baseURL: API_URL,
});

if (typeof window !== "undefined") {
  axiosInstance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}

export default axiosInstance;
