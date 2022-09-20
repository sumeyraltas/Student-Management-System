
import { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import * as React from "react";
import { LectureApi } from "./LectureApi";
import { toast } from "react-toastify";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

const lectureApi = new LectureApi();

function NewLecture({ isOpen, close, submit }) {
  const [timeSlot, setTimeSlot] = useState('');
  const [formState, setFormState] = useState({});
  function onChangeFunction(event) {
    const name = event.target.name;
    const value = event.target.value;
    const newState = { ...formState };
    newState[name] = value;
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
      <DialogTitle>Add Lecture</DialogTitle>
      <DialogContent>
        <TextField onChange={onChangeFunction} name="name" label="Name" fullWidth></TextField>
        <TextField onChange={onChangeFunction} name="definition" label="Definition" fullWidth></TextField>
        <TextField onChange={onChangeFunction} name="type" label="Type" fullWidth></TextField>
        <TextField onChange={onChangeFunction} name="lectureCode" label="Code" fullWidth></TextField>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Lesson Time</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={timeSlot}
              label="lesson Time"
              onChange={handleChange}
            >
              <MenuItem value={'08:40-09:30'}>08:40-09:30</MenuItem>
              <MenuItem value={"9.40-10.30"}>09:40-10:30</MenuItem>
              <MenuItem value={"10.40-11.30"}>10:40-11:30</MenuItem>
              <MenuItem value={"11.40-12.30"}>11:40-12:30</MenuItem>
              <MenuItem value={"13.40-14.30"}>13:40-14:30</MenuItem>
              <MenuItem value={"14.40-15.30"}>14:40-15:30</MenuItem>
              <MenuItem value={"15.40-16.30"}>15:40-16:30</MenuItem>
              <MenuItem value={"16.40-17.30"}>16:40-17:30</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TextField onChange={onChangeFunction} name="lectureRoom" label="Room" fullWidth></TextField>
        <TextField onChange={onChangeFunction} name="lecturerId" label="lecturer Id" fullWidth></TextField>
        <TextField onChange={onChangeFunction} name="assistantId" label="assistant Id" fullWidth></TextField>

      </DialogContent>
      <DialogActions>
        <Button onClick={() => close()} color="secondary">Cancel</Button>
        <Button onClick={() => submit(formState)}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}

export default NewLecture;