import React, { useState, useEffect } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import { LecturerApi } from "./LecturerApi";
import AddLecturer from "./AddLecturer";
import ListLecturers from "./ListLecturers";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import UndoIcon from '@mui/icons-material/Undo';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function LecturerPage() {

  const [open, setOpen] = React.useState(false);
  const lecturerApi = new LecturerApi();
  const [lecturers, setLecturers] = useState([]);
  const [isAddLecturerModalOpen, setAddLecturerModalOpen] = useState(false);
  const navigate = useNavigate();

  async function addLecturer(formState) {
    const response = await lecturerApi.addLecturers(formState);
    const messageResponse = response.data;
    if (messageResponse.responseType === "SUCCESS") {
      toast.success(messageResponse.message);
      setAddLecturerModalOpen(false);
    }
    else {
      toast.error(messageResponse.message);
    }
  }
  function returnHomePage(e) {
    e.preventDefault();
    navigate("/MainPage");
  }

  async function deleteLecturers(e) {
    const response = await lecturerApi.deleteLecturers(e);
    setLecturers(response.data);
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
      <ListLecturers lecturers={lecturers} />
      <Button sx={{ m: 1 }} variant="outlined" onClick={() => navigate(-1)}>Go Back<UndoIcon /></Button>
      <Button sx={{ m: 1 }} variant="outlined" onClick={() => setAddLecturerModalOpen(true)}>Add Lecturer<AddBoxIcon /></Button>
      <AddLecturer isOpen={isAddLecturerModalOpen} close={() => setAddLecturerModalOpen(false)} submit={addLecturer} />
      <Button sx={{ m: 1 }} variant="outlined" onClick={returnHomePage}>Home<HomeIcon /></Button>
      <Button sx={{ m: 1 }} variant="outlined" onClick={() => deleteLecturers()}>Delete Lecturer<DeleteIcon /></Button>
      <Button sx={{ m: 1 }} variant="outlined" onClick={handleClick}>Update Lecturer<UpdateIcon /></Button>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
            You can update name, surname and username by clicking on it.
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
}

export default LecturerPage;