import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  InternalAxiosRequestConfig,
} from "axios";
import { AUTH_NEEDED_URI, API_URL, DEFAULT_TIMEOUT } from "@/apis/constants";
import { ICaller } from "./types";

export class AxiosCaller implements ICaller<AxiosRequestConfig> {
  axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      baseURL: API_URL,
      timeout: DEFAULT_TIMEOUT,
    });

    this.axios.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");
      const authRequired = AUTH_NEEDED_URI.some((pattern) => {
        return config.url?.match(pattern);
      });
      // TODO: Replace with custom error object when created
      if (!token && authRequired) throw new Error("Unauthorized");
      if (!authRequired) return config;
      const newConfig = {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        } as AxiosRequestHeaders,
      };
      return newConfig;
    });
  }

  async get<T>(url: string, option: AxiosRequestConfig<any>): Promise<T> {
    const response = await this.axios.get(url, option);
    return response.data;
  }
  async post<T, D>(
    url: string,
    data: D,
    option: AxiosRequestConfig<any>
  ): Promise<T> {
    const response = await this.axios.post(url, data, option);
    return response.data;
  }
  async put<T, D>(
    url: string,
    data: D,
    option: AxiosRequestConfig<any>
  ): Promise<T> {
    const response = await this.axios.put(url, data, option);
    return response.data;
  }
  async delete<T>(url: string, option: AxiosRequestConfig<any>): Promise<T> {
    const response = await this.axios.delete(url, option);
    return response.data;
  }
}
