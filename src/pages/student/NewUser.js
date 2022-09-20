import { useState } from "react";
import * as React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

function NewUser({ isOpen, close, submit }) {

  const [formState, setFormState] = useState({});

  function onChangeFunction(event) {
    const name = event.target.name;
    const value = event.target.value;
    const newState = { ...formState };
    console.log(name);
    newState[name] = value;
    console.log(newState);
    setFormState(newState);
  }
  {/*function createUserName(){
  }
  */}
  return (
    <Dialog open={isOpen}>
      <DialogTitle>Add Student</DialogTitle>
      <DialogContent>
        <TextField sx={{ m: 0.5 }} onChange={onChangeFunction} name="name" label="Name" fullWidth></TextField>
        <TextField sx={{ m: 0.5 }} onChange={onChangeFunction} name="surname" label="Surname" fullWidth></TextField>
        <TextField sx={{ m: 0.5 }} onChange={onChangeFunction} name="username" label="User Name" fullWidth></TextField>
        <TextField sx={{ m: 0.5 }} onChange={onChangeFunction} name="password" label="Password" fullWidth></TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => close()} color="secondary">Cancel</Button>
        <Button onClick={() => { submit(formState); close() }}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}

export default NewUser;