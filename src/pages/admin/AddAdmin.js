import { useState } from "react";
import * as React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

function AddAdmin({ isOpen, close, submit }) {

  const [formState, setFormState] = useState({});

  function onChangeFunction(event) {
    const name = event.target.name;
    const value = event.target.value;
    const newState = { ...formState };
    newState[name] = value;
    setFormState(newState);
  }

  return (
    <Dialog open={isOpen}>
      <DialogTitle>Add Admin</DialogTitle>
      <DialogContent>
        <TextField onChange={onChangeFunction} name="username" label="User Name" fullWidth></TextField>
        <TextField onChange={onChangeFunction} name="password" label="Password" fullWidth></TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => close()} color="secondary">Cancel</Button>
        <Button onClick={() => submit(formState)} >Submit</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddAdmin;