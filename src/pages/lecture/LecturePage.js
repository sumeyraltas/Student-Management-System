import React, { useState, useEffect } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ListLectures from "./ListLectures";
import { Button } from "@mui/material";
import NewLecture from "./NewLecture";
import { LectureApi } from "./LectureApi";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import UndoIcon from '@mui/icons-material/Undo';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function LecturePage() {

    const navigate = useNavigate();
    const lectureApi = new LectureApi();
    const [open, setOpen] = React.useState(false);
    const [lectures, setLectures] = useState([]);
    const [isAddLectureModalOpen, setAddLectureModalOpen] = useState(false);

    async function fetchLectures() {
        const response = await lectureApi.getLectures();
        setLectures(response.data);
    }
    useEffect(() => {
        fetchLectures();
    }, []);

    function returnHomePage(e) {
        e.preventDefault();
        navigate("/MainPage");
    }
    async function addLecture(formState) {
        const response = await lectureApi.addLectures(formState);
        const messageResponse = response.data;
        if (messageResponse === "SUCCESS") {
            toast.success(messageResponse.message);
            setAddLectureModalOpen(false);
        }
        else {
            toast.error(messageResponse.message);
        }
    }

    const handleClick = () => {
        setOpen(true);
        // updateLecture();
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    function returnHomePage(e) {
        e.preventDefault();
        navigate("/MainPage");
    }

    return (
        <div className="list">
            <ListLectures lectures={lectures} />
            <Button sx={{ m: 1 }} variant="outlined" onClick={() => navigate(-1)}>Go Back<UndoIcon /></Button>
            <Button sx={{ m: 1 }} variant="outlined" onClick={() => setAddLectureModalOpen(true)}>Add Lecture <AddBoxIcon /></Button>
            <NewLecture isOpen={isAddLectureModalOpen} close={() => setAddLectureModalOpen(false)} submit={addLecture} />
            <Button sx={{ m: 1 }} variant="outlined" nClick={returnHomePage}>Home<HomeIcon /></Button>
            { //<Button sx={{ m: 1 }} variant="outlined" onClick={() => deleteLectures(true)}>Delete Lecture<DeleteIcon /></Button>
            }    <Button sx={{ m: 1 }} variant="outlined" onClick={handleClick}>Update Lecture<UpdateIcon /></Button>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                        You can update lectures' definition, time and room by clicking on it.
                    </Alert>
                </Snackbar>
            </Stack>
        </div>
    );
}

export default LecturePage;