import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import Test from "./Test";

function AddHomework({ isOpen, close, submit }) {
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

    return (
        <Dialog open={isOpen}>
            <DialogTitle sx={{ m: 0.5 }} >Add Homework</DialogTitle>
            <DialogContent>
                <TextField sx={{ m: 0.5 }} onChange={onChangeFunction} name="definition" label="Definition" fullWidth></TextField>
                <Test sx={{ m: 0.5 }} />
                {
                    //PDF olarak kayıtlı
                }
                <TextField sx={{ m: 0.5 }} onChange={onChangeFunction} name="deadline" label="Deadline" fullWidth></TextField>
                <TextField sx={{ m: 0.5 }} onChange={onChangeFunction} name="assistantId" label="Assistant ID" fullWidth></TextField>
                <TextField sx={{ m: 0.5 }} onChange={onChangeFunction} name="lectureId" label="Lecture ID" fullWidth></TextField>

            </DialogContent>
            <DialogActions>
                <Button onClick={() => close()} color="secondary">Cancel</Button>
                <Button onClick={() => { submit(formState); close() }}>Submit</Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddHomework;