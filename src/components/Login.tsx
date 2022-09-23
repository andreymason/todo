import React, {useState, useCallback, useEffect} from 'react';
import { TextField, Box, Typography, Button } from '@mui/material';
import {useNavigate} from 'react-router-dom';

import { useDispatch } from '../store/';
import { login } from '../reducers/auth';


function Login() {

    const dispatch = useDispatch();

    let navigate = useNavigate();


    const [token] = useState(localStorage.getItem("token"));

    useEffect(() => {
        if(token)
            navigate("/tasks");
    }, [token, navigate]);


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //const [error, setError] = useState("");

    const usernameOnChange = (event: any) => {
        setUsername(event.target.value);
    }

    const passwordOnChange = (event: any) => {
        setPassword(event.target.value);
    }

    const onLogin = useCallback( async () => {
        dispatch(login({username, password}))

    }, [password, username]);

    return (
        <Box sx={{display: "flex", flexDirection: "column"}}>

            <Typography>
                Please Login
            </Typography>

            <TextField label="username" onChange={usernameOnChange} variant="outlined" />
            <TextField label="password" type="password" onChange={passwordOnChange} variant="outlined" />
            
            <Button variant="outlined" onClick={onLogin}>Login</Button>
            
        </Box>
    );
}

export default Login;