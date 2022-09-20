import * as React from "react";
import { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

export function AddAssistant({ isOpen, close, submit }) {

    const [formState, setFormState] = useState({});

    function onChangeFunction(event) {
        const field = event.target.name;
        const value = event.target.value;
        const newState = { ...formState };
        newState[field] = value;
        setFormState(newState);
    }

    return (
        <Dialog open={isOpen}>
            <DialogTitle sx={{ m: 1 }}>Add Assistant</DialogTitle>
            <DialogContent>
                <TextField sx={{ m: 1 }} onChange={onChangeFunction} name="name" label="Name" fullWidth></TextField>
                <TextField sx={{ m: 1 }}  onChange={onChangeFunction} name="surname" label="Surname" fullWidth></TextField>
                {//<TextField onChange={onChangeFunction} name="username" label="Username" fullWidth></TextField>
                }<TextField sx={{ m: 1 }} onChange={onChangeFunction} name="password" label="Password" fullWidth></TextField>
                <TextField sx={{ m: 1 }} onChange={onChangeFunction} name="lecturerId" label="Lecturer Id" fullWidth></TextField>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => close()} color="secondary">Cancel</Button>
                <Button onClick={() => {submit(formState);close()}}>Submit</Button>
            </DialogActions>
        </Dialog>
    );
}