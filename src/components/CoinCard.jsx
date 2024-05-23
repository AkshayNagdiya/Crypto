import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const CoinCard = ({coin}) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>

            <Card sx={{backgroundColor : '#E4E4D0'}}>

                <CardMedia image={coin.large} sx={{ height: 250 }} />
                <CardContent>
                    <Typography variant='h5'>{coin.name}</Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/coin/${coin.id}`}>
                    <Button variant='text' fullWidth color='info'>Know More..</Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default CoinCard