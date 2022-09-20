import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import { HomeworkApi } from "./HomeworkApi";
import AddHomework from "./AddHomework";
import ListHomework from "./ListHomework";
import AddBoxIcon from '@mui/icons-material/AddBox';
import HomeIcon from '@mui/icons-material/Home';
import DeleteIcon from '@mui/icons-material/Delete';

function HomeworkPage() {
    const homeworkApi = new HomeworkApi();
    const [homework, setHomework] = useState([]);
    const [isAddHomeworkModalOpen, setAddHomeworkModalOpen] = useState(false);
    const navigate = useNavigate();
    const [selectionModel, setSelectionModel] = useState();
    async function fetchHomework() {
        const response = await homeworkApi.getHomework();
        setHomework(response.data);
        console.log(response);
    }

    useEffect(() => {
        fetchHomework();
    }, []);

    async function addHomework(formState) {
        const response = (await homeworkApi.addHomework(formState)).data;
        if (response === "Success") {
            toast.success(response.message);
            setAddHomeworkModalOpen(false);
        }
        else {
            toast.error(response.message);
        }
    }
    async function deleteHomework(e) {
        e.preventDefault();
        const response = await homeworkApi.deleteHomework(selectionModel);
        const messageResponse = response.data;
        console.log(messageResponse);
        if (messageResponse === "Success") {
            toast.success(messageResponse.message);
            setHomework((r) => r.filter((x) => !x.id === selectionModel));
            await fetchHomework();
        }
        else {
            toast.error(messageResponse.message);
        }
    }
    return (
        <div className="list">
            <ListHomework homework={homework} />
            <Button sx={{ m: 1 }} variant="outlined" onClick={() => setAddHomeworkModalOpen(true)}>
                Add Homework<AddBoxIcon /></Button>
            <AddHomework isOpen={isAddHomeworkModalOpen} close={() => setAddHomeworkModalOpen(false)} submit={addHomework} />
            <Button sx={{ m: 1 }} variant="outlined" onClick={() => navigate(-1)}>
                Home<HomeIcon /></Button>
            <Button sx={{ m: 1 }} variant="outlined" onClick={() => deleteHomework(true)}>
                Delete Homework<DeleteIcon /></Button>
        </div>
    );
}

export default HomeworkPage;