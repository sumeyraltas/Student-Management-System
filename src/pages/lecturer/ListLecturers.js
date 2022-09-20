import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { LecturerApi } from "./LecturerApi";
import { toast } from "react-toastify";
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
function ListLecturers() {
    const [selectionModel, setSelectionModel] = useState();
    const [lecturer, setLecturer] = useState([]);
    const lecturerApi = new LecturerApi();

    useEffect(() => {
        getLecturers().then(r => { });
    }, []);

    async function getLecturers() {
        const response = await lecturerApi.getLecturers();
        setLecturer(response.data);
    }

    async function deleteCell(e) {
        e.preventDefault();
        const response = await lecturerApi.deleteLecturers(selectionModel);
        const messageResponse = response.data;
        if (messageResponse.responseType === "SUCCESS") {
            toast.success(messageResponse.message);
            setLecturer((r) => r.filter((x) => !x.id === selectionModel));
            await getLecturers();
        }
        else {
            toast.error(messageResponse.message);
        }
    }


    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 50,
            editable: false,
        },
        {
            field: "name",
            headerName: "Name",
            width: 150,
            editable: true,
        },
        {
            field: "surname",
            headerName: "Surname",
            width: 150,
            editable: true,
        },
        {
            field: "username",
            headerName: "Username",
            width: 150,
            editable: true,
        },
        {
            field: "delete",
            width: 80,
            disableColumnMenu: true,
            renderHeader: () => {
                return (
                    <IconButton onClick={deleteCell} >
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
                    width: "70vh",
                    margin: "auto",
                    padding: "auto",
                }}
            >
                <DataGrid
                    rows={lecturer}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                    selectionModel={selectionModel}
                    hideFooterSelectedRowCount
                    onSelectionModelChange={(selection) => {
                        if (selection.length > 1) {
                            const selectionSet = new Set(selectionModel);
                            const result = selection.filter((s) => !selectionSet.has(s));
                            setSelectionModel(result);
                        } else {
                            setSelectionModel(selection);
                        }
                    }}
                />
            </Box>
        </div>
    );
}
export default ListLecturers;