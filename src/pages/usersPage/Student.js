import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image1 from "./school.png";
import image2 from "./Book Stairs Logo.png";
import image3 from "./Masterfec - Brand identity.png";
import image4 from "./Book Library.png";
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';

function Student() {
    const navigate = useNavigate();
    function returnListExams(e) {
        e.preventDefault();
        navigate("/ListExams");
    }

    function returnListHomework(e) {
        e.preventDefault();
        navigate("/HomeworkPageForStudents");
    }

    function returnListLectures(e) {
        e.preventDefault();
        navigate("/ListLectures");
    }
    function returnRegisterLecture(e) {
        e.preventDefault();
        navigate("/RegisterLecture");
    }

    return (
        <div >
            <Navbar />
            <div className="margins" style={{ display: "flex" }}>
                <Card sx={{
                    m: 7, mt: 1,
                    width: 450,
                    height: 350,
                    flexDirection: "row",
                    flexWrap: "wrap"
                }} >
                    <CardMedia

                        component="img"
                        height="160"
                        image={image1}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            List Lectures
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            You can list lectures.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={returnListLectures}>
                            <Fab variant="extended" color="primary">
                                <NavigationIcon sx={{ mr: 1 }} />
                                Go to Page
                            </Fab>
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{
                    m: 7, mt: 1,
                    width: 450,
                    height: 350,
                    flexDirection: "row",
                    flexWrap: "wrap"
                }}>
                    <CardMedia
                        component="img"
                        height="160"
                        image={image2}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            List Exams
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            You can list exams.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={returnListExams}>
                            <Fab color="primary" variant="extended">
                                <NavigationIcon sx={{ mr: 1 }} />
                                Go to Page
                            </Fab>
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{
                    m: 7, mt: 1,
                    width: 450,
                    height: 350,
                    flexDirection: "row",
                    flexWrap: "wrap"
                }} >
                    <CardMedia
                        component="img"
                        height="160"
                        image={image3}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            List Homeworks
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            You can list homeworks.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={returnListHomework}>
                            <Fab color="primary" variant="extended" >
                                <NavigationIcon sx={{ mr: 1 }} />
                                Go to Page
                            </Fab>
                        </Button>
                    </CardActions>
                </Card>
            </div>

            <div className="margins" style={{ display: "flex" }}>
                <Card sx={{
                    m: 7, mt: 1,
                    width: 450,
                    height: 350,
                    flexDirection: "row",
                    flexWrap: "wrap"
                }}>
                    <CardMedia
                        component="img"
                        height="160"
                        image={image4}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Register Lecture
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            You can register for lecture.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={returnRegisterLecture}>
                            <Fab color="primary" variant="extended">
                                <NavigationIcon sx={{ mr: 1 }} />
                                Go to Page
                            </Fab>
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}
export default Student;