import axios from "axios";

export class ExamApi {
    getExam() {
        return axios.get("/exams");
    }

    addExam(formState) {
        return axios.post("/exams", formState);
    }

    updateExam(id, newData) {
        return axios.put("/exams/" + id, newData);
    }
    deleteExam(id) {
        return axios.delete("/exams/" + id)
    }
}