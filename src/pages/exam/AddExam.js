
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import { ExamApi } from "./ExamApi";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

const examApi = new ExamApi();

function AddExam({ isOpen, close, submit }) {
  const [timeSlot, setTimeSlot] = useState('');
  const [formState, setFormState] = useState({});
  const navigate = useNavigate();

  function onChangeFunction(event) {
    const name = event.target.name;
    const value = event.target.value;
    const newState = { ...formState };
    console.log(name);
    newState[name] = value;
    console.log(newState);
    setFormState(newState);
  }

  const handleChange = (event) => {
    setTimeSlot(event.target.value);
    const newState = { ...formState };
    newState["timeSlot"] = event.target.value;
    setFormState(newState);
  };

  return (
    <Dialog open={isOpen}>
      <DialogTitle>Add Exam</DialogTitle>
      <DialogContent>
        <TextField onChange={onChangeFunction} name="name" label="Name" fullWidth></TextField>
        <TextField onChange={onChangeFunction} name="room" label="Room" fullWidth></TextField>
        <TextField onChange={onChangeFunction} name="time" label="Exam Time" fullWidth></TextField>
        <TextField onChange={onChangeFunction} name="information" label="Information" fullWidth></TextField>
        <TextField onChange={onChangeFunction} name="lectureId" label="Lecture Id" fullWidth></TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => close()} color="secondary">Cancel</Button>
        <Button onClick={() => {submit(formState);close()}}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddExam;