import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeworkApi } from "./HomeworkApi";
import { toast } from "react-toastify";

const columns = [
    {
        field: "definition",
        headerName: "Homework definition",
        width: 150,
    },
    {
        field: "deadline",
        headerName: "Deadline",
        width: 140,
    },
    {
        field: "PDF",
        headerName: "Homework",
        width: 150,
    },
    {
        field: "assistantId",
        headerName: "Assistant ID",
        width: 140,
    },
    {
        field: "lectureId",
        headerName: "Lecture ID",
        width: 140,
    },

];

function ListHomework() {
    const [selectionModel, setSelectionModel] = useState();

    const [homeworks, setHomework] = useState([]);

    const homeworkApi = new HomeworkApi();

    async function getHomework() {
        const response = await homeworkApi.getHomework();
        console.log(response);
        setHomework(response.data);
    }

    useEffect(() => {
        getHomework();
    }, []);


    return (
        <div className="list">
            <Box
                sx={{
                    height: "450px",
                    width: "80vh",
                    margin: "auto",
                    padding: "auto",
                }}
            >
                <DataGrid
                    rows={homeworks}
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
export default ListHomework;