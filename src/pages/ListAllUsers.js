import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AdminApi } from "./admin/AdminApi";
import { AssistantApi } from "./assistant/AssistantApi";
import { LecturerApi } from "./lecturer/LecturerApi";
import { UserApi } from "./student/UserApi";
function ListAllUsers() {

    const [selectionModel, setSelectionModel] = useState();
    const [users, setUsers] = useState([]);

    const userApi = new UserApi();
    const adminApi = new AdminApi();
    const assistantApi = new AssistantApi();
    const lecturerApi = new LecturerApi();

    useEffect(() => {
        getUsers().then(r => { });
    }, []);

    async function getUsers() {
        let response = (await userApi.getUsers()).data;
        let response1 = (await adminApi.getAdmin()).data;
        let response2 = (await assistantApi.getAssistants()).data;
        let response3 = (await lecturerApi.getLecturers()).data;
        // response.push(response1);
        // response.push(response2);
        // response.push(response3);
        setUsers(response1);
        console.log(response1);
    }

    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 150,
        },
        {
            field: "username",
            headerName: "Username",
            width: 150,
        },

    ];

    return (
        <div className="list">
            <Box
                sx={{
                    height: "450px",
                    width: "40vh",
                    margin: "auto",
                    padding: "auto",
                }}
            >
                <DataGrid
                    rows={users}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </Box>
        </div>
    );
}
export default ListAllUsers;