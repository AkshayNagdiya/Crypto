import React from 'react'
import useAuthStatus from '../hooks/useAuthStatus'
import { Outlet, Navigate } from "react-router-dom"
import { Container, LinearProgress } from "@mui/material"

const PrivateRoutes = () => {
    const { loggedIn, checkStatus } = useAuthStatus();

    if (checkStatus) {
        return (
            <Container sx={{ padding: "50px 0px" }}>
                <LinearProgress />
            </Container>
        )
    }

    return loggedIn ? <Outlet /> : <Navigate to={"/login"} />

}

export default PrivateRoutes;