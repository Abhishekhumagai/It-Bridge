import { BASE_URL } from "../constants/Envconstants";
import { axiosWithAuth } from "./interceptor";

export async function happpy() {
  return await axiosWithAuth.get(BASE_URL + "happy-client");
}

export async function footer() {
  return await axiosWithAuth.get(BASE_URL + "site-setting");
}
export async function branch() {
  return await axiosWithAuth.get(BASE_URL + "branch");
}
export async function about() {
  return await axiosWithAuth.get(BASE_URL + "about-us");
}
