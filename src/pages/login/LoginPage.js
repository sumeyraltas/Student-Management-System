import Context from "../../context/Context";
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, NavLink } from "react-router-dom";
import {
    Link
} from "react-router-dom";
import { LoginApi } from "./LoginApi";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import image7 from "./pexels-tirachard-kumtanom-733852.jpg";

function LoginPage() {

    const loginApi = new LoginApi();
    const navigate = useNavigate();
    const [formState, setFormState] = useState({});
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
//style={{ backgroundImage:`url(${image7})` }}

    function onFormInputChange(event) {
        console.log(event)
        const field = event.target.name;
        const value = event.target.value;
        const newState = { ...formState };
        newState[field] = value;
        setFormState(newState);
    }
    async function onClick() {

        const response = (await loginApi.login({ username, password })).data;

        if (response.responseType === "SUCCESS") {
            toast.success(response.message);
            if (response.isAuthority === "Admin") {
                console.log("1");
                navigate("/Admin");
            }
            else if (response.isAuthority === "Student") {
                navigate("/Student")
            }
            else if (response.isAuthority === "Assistant") {
                navigate("/Assistant")
            }
            else if (response.isAuthority === "Lecturer") {
                navigate("/Lecturer")
            }
        }
        else {
            toast.error(response.message);
        }
    }
    return(
        <Box 
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
    >
        <div className="login-size" >
            <VpnKeyIcon sx={{
                fontSize: 50,
                m: 5,
            }} />
            <h1 className="signin">SIGN IN </h1>
            <TextField
                onChange={(event) => setUsername(event.target.value)}
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoFocus
            />
            <TextField
                onChange={(event) => setPassword(event.target.value)}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
            />
            <div >
                <Button type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 3 }}
                    onClick={onClick}
                >
                    SUBMIT</Button>
            </div>
            <div>
                <NavLink  
                sx={{fontSize: 35}}
                to="/ResetPassword" >
                    Reset Password
                </NavLink>
            </div>
        </div>
    </Box>

    );
}

export default LoginPage;