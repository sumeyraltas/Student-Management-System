import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Button } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { LectureApi } from "../lecture/LectureApi";
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function RegisterLecture() {
    const [lecture, setLecture] = useState([]);
    const lectureApi = new LectureApi();
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        getLectures().then(r => { });
    }, []);

    async function getLectures() {
        const response = await lectureApi.getLectures();
        setLecture(response.data);
    }

    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 50,
        },
        {
            field: "name",
            headerName: "Lecture name",
            width: 150,
        },
        {
            field: "definition",
            headerName: "Lecture definition",
            width: 150,
        },
        {
            field: "code",
            headerName: "Lecture Code",
            width: 150,
            editable: true,
        },
        {
            field: "time",
            headerName: "Lecture time",
            width: 150,
            editable: true,
        },
        {
            field: "room",
            headerName: "Lecture room",
            width: 150,
            editable: true,
        },
    ];
    const handleClick = () => {
        setOpen(true);
        console.log()
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    return (
        <div className="list">
            <Box
                sx={{
                    height: "450px",
                    width: "88vh",
                    margin: "auto",
                    padding: "auto",
                }}
            >
                <DataGrid
                    rows={lecture}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </Box>
            <Button sx={{ m: 1 }} variant="outlined" onClick={handleClick}>Register Lecture <AppRegistrationIcon /></Button>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                        Student register the lecture.
                    </Alert>
                </Snackbar>
            </Stack>
        </div>
    );
}
export default RegisterLecture;