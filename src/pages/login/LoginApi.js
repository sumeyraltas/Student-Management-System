
import axios from "axios";

export class LoginApi {
  login(formState) {
    console.log(formState)
    return axios.post("/login", formState);
  }
}