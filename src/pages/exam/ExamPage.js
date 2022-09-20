
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ListExams from "./ListExams.js";
import { Button } from "@mui/material";
import { ExamApi } from "./ExamApi";
import AddExam from "./AddExam";
import AddBoxIcon from '@mui/icons-material/AddBox';
import HomeIcon from '@mui/icons-material/Home';
import DeleteIcon from '@mui/icons-material/Delete';

function ExamPage() {
    const examApi = new ExamApi();
    const [exams, setExams] = useState([]);
    const [isAddExamModalOpen, setAddExamModalOpen] = useState(false);
    const navigate = useNavigate();
    const [selectionModel, setSelectionModel] = useState();
    async function fetchExam() {
        const response = await examApi.getExam();
        setExams(response.data);
    }
    useEffect(() => {
        fetchExam();
    }, []);

    async function addExam(formState) {
        const response = (await examApi.addExam(formState)).data;
        if (response === "Success") {
            toast.success(response);
        }
        else {
            toast.error(response);
        }
    }
    async function deleteExams(e) {
        e.preventDefault();
        const response = await examApi.deleteExam(selectionModel);
        const messageResponse = response.data;
        if (messageResponse === "Success") {
            toast.success(messageResponse.message);
            setExams((r) => r.filter((x) => !x.id === selectionModel));
            await fetchExam();
        }
        else {
            toast.error(messageResponse.message);
        }
    }
    return (
        <div className="list">
            <ListExams exams={exams} />
            <Button sx={{ m: 1 }} variant="outlined" onClick={() => setAddExamModalOpen(true)}>
                Add Exam  <AddBoxIcon />
            </Button>
            <AddExam isOpen={isAddExamModalOpen} close={() => setAddExamModalOpen(false)} submit={addExam} />
            <Button sx={{ m: 1 }} variant="outlined" onClick={() => navigate(-1)}>
                Home <HomeIcon />
            </Button>
            <Button sx={{ m: 1 }} variant="outlined" onClick={() => deleteExams(true)}>
                Delete Exam <DeleteIcon />
            </Button>
        </div>
    );
}

export default ExamPage;


