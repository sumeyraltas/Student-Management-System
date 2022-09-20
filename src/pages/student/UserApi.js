import axios from "axios";

export class UserApi {
  getUsers() {
    return axios.get("/students");
  }
  addUsers(formState) {
    return axios.post("/students", formState);
  }
  deleteUser(id) {
    return axios.delete("/students/" + id)
  }
  updateUser(id, newData) {
    return axios.put("/students/" + id, newData)
  }
}