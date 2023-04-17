const VERSION = "v1";
const BASE_URL = "http://localhost:3000/api";
export const API_URL = `${BASE_URL}/${VERSION}`;
export const DEFAULT_TIMEOUT = 10000;
export const API_URI = Object.freeze({
  USER: "/user",
  AUTH: "/auth",
});

export const AUTH_NEEDED_URI = Object.freeze([/\/users\/*/]);
