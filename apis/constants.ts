const VERSION = "v1";
const VERSION = "v1";
const BASE_URL = `/api/${VERSION}`
// when add process env, change host to env;
const HOST = "https://localhost:3000";
export const API_URL = `${HOST}${BASE_URL}`

export const DEFAULT_TIMEOUT = 10000;
export const API_URI = Object.freeze({
  USER: "/user",
  AUTH: "/auth",
});

export const AUTH_NEEDED_URI = Object.freeze([/\/users\/*/]);
