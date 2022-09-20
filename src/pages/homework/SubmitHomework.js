import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import Test from "./Test";

function SubmitHomework({ isOpen, close, submit }) {
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
            <DialogTitle>Submit Homework</DialogTitle>
            <TextField onChange={onChangeFunction} name="definition" label="Definition" fullWidth></TextField>

            <DialogContent>

                <Test />
                {
                    //PDF olarak kayıtlı
                }

            </DialogContent>
            <DialogActions>
                <Button onClick={() => close()} color="secondary">Cancel</Button>
                <Button onClick={() => submit(formState)} color="primary">Submit</Button>
            </DialogActions>
        </Dialog>
    );
}

export default SubmitHomework;