import { AxiosRequestConfig } from 'axios';
import { ICaller } from '@/apis/caller';
import { API_URI } from '@/apis/constants';
import { Apis } from '@/apis/abtract';

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
