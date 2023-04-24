import { AxiosRequestConfig } from 'axios';
import { Apis } from '@/apis/abtract';
import { ICaller } from '@/apis/caller';
import { API_URI } from '@/apis/constants';
import AuthManager from './AuthManager';

type LoginFormData = {
  id: string;
  password: string;
};

type SignUpFormData = LoginFormData & {
  email: string;
  introduction: string;
};

export default class AuthApis extends Apis {
  authManager: AuthManager;
  constructor(caller: ICaller<AxiosRequestConfig>) {
    super(caller, API_URI.AUTH);
    this.authManager = new AuthManager(caller);
  }

  login(loginFormData: LoginFormData) {
    return this.caller.post<{ token: string }, LoginFormData>(
      this.uri('/login'),
      loginFormData,
    );
  }

  signup(form: SignUpFormData) {
    return this.caller.post(this.uri('/signup'), {}, {});
  }

  logout() {
    this.authManager.logout();
  }

  setToken(token: string) {
    this.authManager.setToken(token);
  }
}
