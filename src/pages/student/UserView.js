import * as React from "react";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserApi } from "./UserApi";
import ListUsers from "./ListUsers";
import NewUser from "./NewUser";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import UndoIcon from '@mui/icons-material/Undo';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import UpdateIcon from '@mui/icons-material/Update';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function UserView() {

  const navigate = useNavigate();
  const userApi = new UserApi();
  const [students, setStudents] = useState([]);
  const [isAddStudentModalOpen, setAddStudentModalOpen] = useState(false);
  const [open, setOpen] = React.useState(false);

  async function fetchStudents() {
    const response = await userApi.getUsers();
    setStudents(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  async function addStudent(formState) {
    const response = (await userApi.addUsers(formState)).data;
    console.log(response);
    if (response.responseType === "SUCCESS") {
      toast.success(response.message);
      setAddStudentModalOpen(false);
    }
    else {
      toast.error(response.message);
    }
  }
  function returnHomePage(e) {
    e.preventDefault();
    navigate("/MainPage");
  }
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <div className="list">
      <ListUsers students={students} />
      <Button sx={{ m: 1 }} variant="outlined" onClick={() => navigate(-1)}>
        Go Back <UndoIcon />
      </Button>
      <Button sx={{ m: 1 }} variant="outlined" onClick={() => setAddStudentModalOpen(true)}>Add Student <AddBoxIcon /></Button>
      <NewUser isOpen={isAddStudentModalOpen} close={() => setAddStudentModalOpen(false)} submit={addStudent} />
      <Button sx={{ m: 1 }} variant="outlined" onClick={returnHomePage}>Home <HomeIcon /> </Button>
      <Button sx={{ m: 1 }} variant="outlined" onClick={handleClick}>Update Student <UpdateIcon /></Button>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
            You can update name, surname, mail and username by clicking on it.
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
}

export default UserView;