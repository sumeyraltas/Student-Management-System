import React, { useState } from "react";
import { AppBar } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Navbar from "../navbar";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import FolderIcon from '@mui/icons-material/Folder';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Icon from '@mui/material/Icon';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs, { Dayjs } from 'dayjs';
import Box from '@mui/material/Box';
const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 5,
    border: 1,
    width: '27rem',
    height: '27rem',
};
function Assistant() {
    const [lectures, setLectures] = useState([]);
    const navigate = useNavigate();
    function returnListExams(e) {
        e.preventDefault();
        navigate("/ExamPage");
    }

    function returnListHomework(e) {
        e.preventDefault();
        navigate("/HomeworkPage");
    }

    function returnListLectures(e) {
        e.preventDefault();
        navigate("/LecturePage");
    }

    return (
        <div>
            <Navbar />
            <Toolbar>
                <List sx={{ m: 1, pr: 5 }} >
                    <ListItemButton sx={{ m: 3 }} onClick={returnListLectures}>
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>Lecture Page</ListItemButton>
                    <ListItemButton sx={{ m: 3 }} onClick={returnListHomework}>
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>Homework Page</ListItemButton>
                    <ListItemButton sx={{ m: 3 }} onClick={returnListExams}>
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>Exam Page</ListItemButton>
                </List>
                <LocalizationProvider sx={{
                    flexWrap: "wrap-reverse"
                }}
                    dateAdapter={AdapterDayjs}>
                    <StaticDatePicker
                        displayStaticWrapperAs="desktop"
                        renderInput={(params) => <TextField {...params} />}
                        dayOfWeekFormatter={(day) => `${day}.`}
                        toolbarFormat="ddd DD MMMM"
                        showToolbar
                    />
                </LocalizationProvider>
                <Box sx={{ ...commonStyles, borderRadius: '16px', fontSize: 50, fontStyle: 'italic', }} >
                    <br />Welcome <br />to<br /> Assistant <br />Page.
                </Box>
            </Toolbar>
        </div>
    );
}
export default Assistant;