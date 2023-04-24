import UserApis from "./users";
import AuthApis from "./auth";
import { AxiosCaller } from "./caller";

const caller = new AxiosCaller();
export const userApis = new UserApis(caller);
export const authApis = new AuthApis(caller);
