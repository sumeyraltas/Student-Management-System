import * as React from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import { AssistantApi } from "./AssistantApi";

export default function ListAssistant() {

    useEffect(() => {
        getAssistants().then(r => { });
    }, []);

    const [assistants, setAssistants] = useState([]);
    const [selectionModel, setSelectionModel] = useState();
    const assistantApi = new AssistantApi();

    async function getAssistants() {
        const response = await assistantApi.getAssistants();
        setAssistants(response.data);
    }
    async function deleteCell(e) {
        e.preventDefault();
        const response = await assistantApi.deleteAssistant(selectionModel);
        const messageResponse = response.data;
        console.log(messageResponse);
        if (messageResponse.responseType === "SUCCESS") {
            toast.success(messageResponse.message);
            setAssistants((r) => r.filter((x) => !x.id === selectionModel));
            await getAssistants();
        }
        else {
            toast.error(messageResponse.message);
        }
    }
    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 150,
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
            width: 75,
            disableColumnMenu: true,
            renderHeader: () => {
                return (
                    <IconButton onClick={deleteCell}>
                        <DeleteIcon color="primary" />
                    </IconButton>
                );
            }
        },
    ]

    return (
        <div className="list">
            <Box sx={{
                height: "450px",
                width: "80vh",
                margin: "auto",
                padding: "auto",
            }}>
                <DataGrid
                    rows={assistants}
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