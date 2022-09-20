import axios from "axios";

export class LectureApi {
  getLectures() {
    return axios.get("/lectures");
  }

  addLectures(formState) {
    return axios.post("/lectures", formState);
  }
  
  deleteLectures(id) {
    return axios.delete("/lectures/" + id)
  }

  updateLectures(id, newData) {
    return axios.put("/lectures/" + id, newData)
  }
}