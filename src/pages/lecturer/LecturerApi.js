import axios from "axios";

export class LecturerApi {
  getLecturers() {
    return axios.get("/lecturers");
  }

  addLecturers(formState) {
    return axios.post("/lecturers", formState);
  }

  deleteLecturers(id) {
    return axios.delete("/lecturers/" + id)
  }

  updateLecturers(id, newData) {
    return axios.put("/lecturers/" + id, newData)
  }
}