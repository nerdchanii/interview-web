import { AxiosRequestConfig } from "axios";
import { ICaller } from "@/src/apis/caller/types";
import { API_URI } from "@/src/apis/constants";
import { Apis } from "@/src/apis/abtract";

export default class UserApis extends Apis {
  constructor(caller: ICaller<AxiosRequestConfig>) {
    super(caller, API_URI.USERS);
  }

  async user(id: string) {
    return await this.caller.get(this.uri(id));
  }

  async users() {
    return await this.caller.get(this.uri());
  }
}
