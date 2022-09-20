import React, { useState } from "react";
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AddAdmin from "../admin/AddAdmin";
import { AdminApi } from "../admin/AdminApi";
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
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NavigationIcon from '@mui/icons-material/Navigation';
import image5 from "./Student free vector icons designed by Freepik.png";
import image6 from "./Teacher free vector icons designed by Freepik.png";

const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 5,
    border: 1,
    width: '27rem',
    height: '27rem',
};
function Admin() {

    const [lectures, setLectures] = useState([]);
    const navigate = useNavigate();
    const [isAddAdminModalOpen, setAddAdminModalOpen] = useState(false);
    const adminApi = new AdminApi();
    function returnListExams(e) {
        e.preventDefault();
        navigate("/ExamPage");
    }
    function returnStudent(e) {
        e.preventDefault();
        navigate("/UserView");
    }
    function returnListHomework(e) {
        e.preventDefault();
        navigate("/HomeworkPage");
    }

    function returnListLectures(e) {
        e.preventDefault();
        navigate("/LecturePage");
    }
    function returnAssistant(e) {
        e.preventDefault();
        navigate("/AssistantPage");
    }
    function returnLecturer(e) {
        e.preventDefault();
        navigate("/LecturerPage");
    }
    function returnListAllUsers(e) {
        e.preventDefault();
        navigate("/ListAllUsers");
    }
    async function addAdmin(formState) {
        const response = (await adminApi.addAdmin(formState)).data;
        if (response.responseType === "SUCCESS") {
            toast.success(response.message);
            setAddAdminModalOpen(false);
        }
        else {
            toast.error(response.message);
        }
    }
    function studentPage(e) {
        e.preventDefault();
        navigate("/Student");
    }
    function lecturerPage(e) {
        e.preventDefault();
        navigate("/Lecturer");
    }

    return (
        <div>
            <Navbar />
            <Toolbar>
                <List sx={{ m: 1, pr: 10 }} >
                    <ListItemButton sx={{ m: 1 }} onClick={() => setAddAdminModalOpen(true)}>
                        <ListItemAvatar>
                            <Avatar>
                                <Icon baseClassName="material-icons-two-tone">+</Icon>
                            </Avatar>
                        </ListItemAvatar>Add Admin</ListItemButton >
                    <AddAdmin isOpen={isAddAdminModalOpen} close={() => setAddAdminModalOpen(false)} submit={addAdmin} />
                    <ListItemButton sx={{ m: 1 }} onClick={returnListAllUsers}>
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>List Users</ListItemButton>
                    <ListItemButton sx={{ m: 1 }} onClick={returnListLectures}>
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>Lecture Page</ListItemButton>
                    <ListItemButton sx={{ m: 1 }} onClick={returnListHomework}>
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>Homework Page</ListItemButton>
                    <ListItemButton sx={{ m: 1 }} onClick={returnListExams}>
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>Exam Page</ListItemButton>
                    <ListItemButton sx={{ m: 1 }} onClick={returnStudent}>
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>Student Page</ListItemButton>
                    <ListItemButton sx={{ m: 1 }} onClick={returnAssistant}>
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>Assistant Page</ListItemButton>
                    <ListItemButton sx={{ m: 1 }} onClick={returnLecturer}>
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>Lecturer Page</ListItemButton>
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
                    <br />Welcome <br />to<br /> Admin <br />Page.
                </Box>
                <Card sx={{
                    m: 2, mt: 1,
                    width: 410,
                    height: 410,
                    flexDirection: "row",
                    flexWrap: "wrap"
                }}>
                    <CardMedia
                        component="img"
                        height="240"
                        image={image6}
                        style={{
                            width: '60%',
                            height: '60%'
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Go to Lecturer Page.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            You can go to Lecturer Page. As a admin,  you can see the page as lecturer.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={lecturerPage}>
                            <Fab color="primary" variant="extended">
                                <NavigationIcon sx={{ mr: 0.5 }} />
                                Go to Page
                            </Fab>
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{
                    m: 2, mt: 1,
                    width: 410,
                    height: 410,
                    flexDirection: "row",
                    flexWrap: "wrap"
                }}>
                    <CardMedia
                        component="img"
                        height="240"
                        image={image5}
                        style={{
                            width: '60%',
                            height: '60%'
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Go to Student Page.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            You can go to Student Page.  As a admin, you can see the page as student.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={studentPage}>
                            <Fab color="primary" variant="extended">
                                <NavigationIcon sx={{ mr: 0.5 }} />
                                Go to Page
                            </Fab>
                        </Button>
                    </CardActions>
                </Card>
                
            </Toolbar>
        </div>

    );
}
export default Admin;