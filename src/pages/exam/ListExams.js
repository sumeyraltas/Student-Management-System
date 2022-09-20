import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { ExamApi } from "./ExamApi";
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import { toast } from "react-toastify";
function ListExams() {

    const [selectionModel, setSelectionModel] = useState();
    const [exams, setExams] = useState([]);
    const examApi = new ExamApi();

    useEffect(() => {
        getExam();
    }, []);

    async function getExam() {
        const response = await examApi.getExam();
        setExams(response.data);
        console.log(response.data);
    }

    async function deleteCell(e) {
        e.preventDefault();
        const response = await examApi.deleteExam(selectionModel);
        const messageResponse = response.data;
        if (messageResponse.responseType === "SUCCESS") {
            toast.success(messageResponse.message);
            setExams((r) => r.filter((x) => !x.id === selectionModel));
            await getExam();
        }
        else {
            toast.error(messageResponse.message);
        }

    }
    const columns = [
        {
            field: "name",
            headerName: "Exam name",
            width: 150,
        },
        {
            field: "room",
            headerName: "Exam room",
            width: 150,
        },
        {
            field: "time",
            headerName: "Exam time",
            width: 150,
        },
        {
            field: "info",
            headerName: "Exam information",
            width: 150,
        },
        {
            field: "lectureId",
            headerName: "Lecture Id",
            width: 150,
        },
        {
            field: "delete",
            width: 80,
            disableColumnMenu: true,
            renderHeader: () => {
                return (
                    <IconButton onClick={deleteCell}>
                        <DeleteIcon color="primary" />
                    </IconButton>
                );
            }
        },

    ];
    return (
        <div className="list">
            <Box
                sx={{
                    height: "450px",
                    width: "92vh",
                    margin: "auto",
                    padding: "auto",
                }}
            >
                <DataGrid
                    rows={exams}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}

                />
            </Box>
        </div>
    );
}
export default ListExams;