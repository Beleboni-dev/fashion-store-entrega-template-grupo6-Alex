import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: "https://fashion-store-api.onrender.com",
  timeout: 8000,
});
