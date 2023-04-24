import { AxiosRequestConfig } from "axios";
import { AxiosCaller, ICaller } from "@/apis/caller";

export default class AuthManager {
  caller: ICaller<AxiosRequestConfig>;
  token: string | null;

  constructor(caller: ICaller<AxiosRequestConfig>) {
    this.caller = caller;
    this.token = null;
  }

  setToken(token: Object) {
    this.token = JSON.stringify(token);
  }

  getToken() {
    return this.token;
  }

  logout() {
    this.token = null;
  }
}
