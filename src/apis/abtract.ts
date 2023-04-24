import { AxiosRequestConfig } from 'axios';
import { ICaller } from './caller';

export abstract class Apis {
  caller: ICaller<AxiosRequestConfig>;
  resource: string;

  constructor(caller: ICaller<AxiosRequestConfig>, resource: string) {
    this.caller = caller;
    this.resource = resource;
  }

  uri(path?: string) {
    return path ? `${this.resource}${path}` : this.resource;
  }
}
