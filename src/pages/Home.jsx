import { Container, Grid, LinearProgress, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import CoinCard from '../components/CoinCard';
import { fetchTrending } from '../features/coins/coinSlice';

const Home = () => {

    const { user, isLoading, isError, message } = useSelector((state) => state.auth);
    const {coins} = useSelector((state)=>state.coins)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
        dispatch(fetchTrending())

    }, [user]);
// console.log(coins)
    if (isLoading || coins.length === 0) {
        return (
            <Container sx={{ padding: "50px 0px" }}>
                <LinearProgress />
            </Container>

        )
    }

    return (
        <>
            <Typography variant='h4' align='center'  sx={{margin : '25px 0px' , fontFamily : '"Courgette", cursive'}}>
                TRENDING CRYPTO CURRENCIES
            </Typography>
            <Grid container spacing={4}>
                {coins.map((coin)=> <CoinCard key={coin.item.coin_id} coin={coin.item}/>)}
            </Grid>
        </>
    )
}

export default Home