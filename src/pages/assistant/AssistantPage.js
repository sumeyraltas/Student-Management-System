import * as React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import { AssistantApi } from "./AssistantApi";
import { AddAssistant } from "./AddAssistant";
import ListAssistant from "./ListAssistant";
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';

function AssistantPage() {

    const [assistants, setAssistants] = useState([]);
    const [isAddAssistantDialogOpen, setAddAssistantDialogOpen] = useState(false);
    const assistantApi = new AssistantApi();
    const navigate = useNavigate();

    async function addAssistant(formState) {
        const response = await assistantApi.addAssistant(formState);
        const messageResponse = response.data;
        if (messageResponse.responseType === "SUCCESS") {
            toast.success(messageResponse.message);
            setAddAssistantDialogOpen(false);
        }
        console.log("delkf");
    }
    return (
        <div>
            <ListAssistant assistants={assistants} />
            <Button sx={{ m: 1 }} variant="outlined" onClick={() => setAddAssistantDialogOpen(true)}>Add Assistant <AddBoxIcon /></Button>
            <AddAssistant isOpen={isAddAssistantDialogOpen} close={() => setAddAssistantDialogOpen(false)} submit={addAssistant} />
            <Button sx={{ m: 1 }} variant="outlined" onClick={() => navigate(-1)}>Home <HomeIcon /></Button>
        </div>
    )
}

export default AssistantPage;