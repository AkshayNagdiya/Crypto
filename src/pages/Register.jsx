import { Button, Card, CardContent, Container, LinearProgress, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { registerUser } from '../features/auth/authSlice'

const Register = () => {
     
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user, isLoading, isError, message } = useSelector((state) => state.auth)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",

    })

    const { name, email, password, password2 } = formData;
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    };
    const handleSubmit = (e) => {
        e.preventDefault(),
        dispatch(registerUser(formData))
    };

    useEffect(() => {
        if (user) {
            navigate("/")
        }
        if(isError||message){
            toast.error(message)
        }
    }, [user,isError,message]);


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

                    <Typography variant='h5' align='center' >
                        REGISTER HERE...
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField variant='outlined' label="Name" name='name' fullWidth sx={{ margin: "20px 0px 10px 0px" }} required onChange={handleChange} value={name}></TextField>
                        <TextField variant='outlined' label="Email" name='email' type='email' fullWidth sx={{ margin: "10px 0px" }} required onChange={handleChange} value={email}></TextField>
                        <TextField variant='outlined' label="Password" name='password' type='password' fullWidth sx={{ margin: "10px 0px" }} required onChange={handleChange} value={password}></TextField>
                        <TextField variant='outlined' label="Confirm Password" name='password2' type='password' fullWidth sx={{ margin: "10px 0px" }} required onChange={handleChange} value={password2}></TextField>
                        <Button type='submit' variant='contained' color='success' fullWidth sx={{ margin: "10px 0px" }} >Register</Button>
                    </form>
                </CardContent>
            </Card>
        </>
    )
}

export default Register