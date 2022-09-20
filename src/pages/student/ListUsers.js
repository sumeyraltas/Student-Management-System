import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { UserApi } from "./UserApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import { toast } from "react-toastify";
function ListUsers() {

  const [selectionModel, setSelectionModel] = useState();
  const [users, setUsers] = useState([]);
  const userApi = new UserApi();

  useEffect(() => {
    getUsers().then(r => { });
  }, []);

  async function getUsers() {
    const response = await userApi.getUsers();
    setUsers(response.data);
  }

  async function deleteCell(e) {
    e.preventDefault();
    const response = await userApi.deleteUser(selectionModel);
    const messageResponse = response.data;
    if (messageResponse.responseType === "SUCCESS") {
      toast.success(messageResponse.message);
      setUsers((r) => r.filter((x) => !x.id === selectionModel));
      await getUsers();
    }
    else {
      toast.error(messageResponse.message);
    }
  }
  async function updateCell(params, newValue) {
    const studentIndex = users.findIndex(users => {
      return users.id === params.id;
    });
    const updateStudents = [...users];
    updateStudents[studentIndex][params.field] = newValue;
    setUsers(updateStudents)
    const id = params.id;
    const response = (await userApi.updateUser(id, updateStudents[studentIndex])).data;
    toast.success(response.message);
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
      field: "email",
      headerName: "E-Mail",
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
          rows={users}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          onCellEditStop={(params, event) => updateCell(params, event.target.value)} 
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
export default ListUsers;