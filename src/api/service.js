import { BASE_URL } from "../constants/Envconstants";
import { axiosWithAuth } from "./interceptor";

export async function service() {
  return await axiosWithAuth.get(BASE_URL + "service");
}