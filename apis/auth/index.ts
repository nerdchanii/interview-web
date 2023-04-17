import { AxiosRequestConfig } from "axios";
import { Apis } from "../abtract";
import { AxiosCaller, ICaller } from "../caller";
import { API_URI } from "../constants";
import AuthManager from "./AuthManager";

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

  login({ id, password }: LoginFormData) {
    return this.caller.post<{ token: string }, LoginFormData>(
      this.uri("/login"),
      {
        id,
        password,
      }
    );
  }

  signup(form: SignUpFormData) {
    return this.caller.post(this.uri("/signup"), {}, {});
  }

  logout() {
    this.authManager.logout();
  }

  setToken(token: string) {
    this.authManager.setToken(token);
  }
}
