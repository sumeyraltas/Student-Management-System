import axios from "axios";

export class AssistantApi {
    getAssistants() {
        return axios.get("/assistant");
    }

    addAssistant(formState) {
        return axios.post("/assistant", formState);
    }
    deleteAssistant(id) {
        return axios.delete("/assistant/" + id)
    }

    updateAssistant(id, newData) {
        return axios.put("/assistant/" + id, newData)
    }
}