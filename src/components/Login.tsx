import React, {useState, useCallback, useEffect} from 'react';
import { TextField, Box, Typography, Button, Alert } from '@mui/material';
import {useNavigate} from 'react-router-dom';



function Login() {

    let navigate = useNavigate();


    const [token, setToken] = useState(localStorage.getItem("token"));

    useEffect(() => {
        if(token)
            navigate("/tasks");
    }, [token]);


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const auth_data = {
        username, password
    };

    const usernameOnChange = (event: any) => {
        setUsername(event.target.value);
    }

    const passwordOnChange = (event: any) => {
        setPassword(event.target.value);
    }

    const onLogin = useCallback( async () => {

        const response = await fetch(
            'http://localhost:8000/api-token-auth/',
            {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(auth_data)
            }
        );

        if(response.status >= 400) {
            const body = response.body;

            if(body)
                setError(body.toString());
        }
        else {
            const json = await response.json();

            const token = json.token;

            if(token) {
                localStorage.setItem('token', token);
                setToken(token);
            }
        }

    }, [setToken, username, password]);

    return (
        <Box sx={{display: "flex", flexDirection: "column"}}>

            <Typography>
                Please Login
            </Typography>

            <TextField label="username" onChange={usernameOnChange} variant="outlined" />
            <TextField label="password" type="password" onChange={passwordOnChange} variant="outlined" />
            {error&&<Alert severity="error">This is an error alert — check it out!</Alert>}
            <Button variant="outlined" onClick={onLogin}>Login</Button>
            
        </Box>
    );
}

export default Login;