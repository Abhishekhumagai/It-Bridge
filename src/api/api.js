import { BASE_URL } from "../constants/Envconstants";
import { axiosWithAuth } from "./interceptor";

export async function contact(contactdata) {
  return await axiosWithAuth.post(BASE_URL + "contact-form", contactdata);
}
