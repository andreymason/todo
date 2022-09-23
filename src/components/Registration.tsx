import React, {useState, useEffect} from 'react';
import { TextField, Box, Typography, Button, Alert } from '@mui/material';
import { useCallback } from 'react';

const Registration = () => {

    const [token, setToken] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error] = useState("");

    const usernameOnChange = (event: any) => {
        setUsername(event.target.value);
    }

    const passwordOnChange = (event: any) => {
        setPassword(event.target.value);
    }

    useEffect(() => {

        localStorage.setItem('token', token);

    }, [token]);

    const onRegister = useCallback( async () => {
        const authData = {
            username, password
        };

        const response = await fetch(
            'http://localhost:8000/registration/',
            {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(authData)
            }
        );

        if(response.status < 400) {
            const json = await response.json();

            const newToken = json.token;

            if(newToken)
                setToken(newToken);
        }

    }, [username, password]);

    return (
        <Box sx={{display: "flex", flexDirection: "column"}}>

            <Typography>
                Registration
            </Typography>

            <TextField label="username" onChange={usernameOnChange} variant="outlined" />
            <TextField label="password" type="password" onChange={passwordOnChange} variant="outlined" />
            {error&&<Alert severity="error">This is an error alert — check it out!</Alert>}
            <Button variant="outlined" onClick={onRegister}>Register</Button>
            
        </Box>
    );
}

export default Registration;