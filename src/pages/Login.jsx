import { Button, Card, CardContent, Container, LinearProgress, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from '../features/auth/authSlice';

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const { user, isLoading, isError, message , isSuccess} = useSelector((state) => state.auth);


    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const { email, password } = formData;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUser(formData))
    }

    useEffect(() => {
        if (user) {
            navigate("/")
        }
        if (isError || message) {
            toast.error(message)
        }

    }, [user, isError, message, isSuccess]);

    if (isLoading) {
        return (
            <Container sx={{ padding: "50px 0px" }}>
                <LinearProgress />
            </Container>
        )
    }
    
    return (
        <>
            <Card>
                <CardContent>

                    <Typography variant='h5' align='center'>
                        LOGIN HERE...
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField variant='outlined' label="Email" name='email' type='email' fullWidth sx={{ margin: "20px 0px 10px 0px" }} required onChange={handleChange} value={email}></TextField>
                        <TextField variant='outlined' label="Password" name='password' type='password' fullWidth sx={{ margin: "10px 0px" }} required onChange={handleChange} value={password}></TextField>
                        <Button type='submit' variant='contained' color='success' fullWidth sx={{ margin: "10px 0px" }} >Login</Button>
                    </form>
                </CardContent>
            </Card>
        </>
    )
}

export default Login