import React, { useState, useEffect } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import { HomeworkApi } from "./HomeworkApi";
import AddHomework from "./AddHomework";
import ListHomework from "./ListHomework";
import SubmitHomework from "./SubmitHomework";
import PublishIcon from '@mui/icons-material/Publish';
import HomeIcon from '@mui/icons-material/Home';
function HomeworkPageForStudents() {
    const homeworkApi = new HomeworkApi();

    const [formState, setFormState] = useState({});
    const [selectedFile, setSelectedFile] = useState(null);
    const [homework, setHomework] = useState([]);
    const [isAddHomeworkModalOpen, setAddHomeworkModalOpen] = useState(false);


    function onChangeFunction(event) {
        const field = event.target.name;
        const value = event.target.value;
        const newState = { ...formState };
        newState[field] = value;
        setFormState(newState);
    }
    useEffect(() => {
        fetchHomework();
    }, []);

    async function fetchHomework() {
        const response = await homeworkApi.getHomework();
        setHomework(response.data);
        console.log(response);
    }

    const navigate = useNavigate();

    function returnHomePage(e) {
        e.preventDefault();
        navigate("/MainPage");
    }
    async function addHomework(formState) {
        const response = await homeworkApi.addHomework(formState);
        const messageResponse = response.data;
        if (messageResponse.responseType === "SUCCESS") {
            toast.success(messageResponse.message);
        }
        else {
            toast.error(messageResponse.message);
        }
    }
    function onChangeFunction(event) {
        const name = event.target.name;
        const value = event.target.value;
        const newState = { ...formState };
        console.log(name);
        newState[name] = value;
        console.log(newState);
        setFormState(newState);
      }
    return (
        <div className="list">
            <ListHomework homework={homework} /> 
            <Button sx={{ m: 1 }} variant="outlined" onClick={() => setAddHomeworkModalOpen(true)}>Submit Homework<PublishIcon /></Button>
            <SubmitHomework isOpen={isAddHomeworkModalOpen} close={() => setAddHomeworkModalOpen(false)} submit={addHomework} />
            <Button sx={{ m: 1 }} variant="outlined" onClick={() => navigate(-1)}>Home <HomeIcon /></Button>
        </div>
    );
}

export default HomeworkPageForStudents;