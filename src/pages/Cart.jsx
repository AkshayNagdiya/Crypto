import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItems";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const total = cartItems.reduce((p, c) => {
    return p + c.qty * c.price;
  }, 0);

  return (
    <Container sx={{ padding: "20px 0px", backgroundColor : "#7F8487"}}>
      <Typography variant="h4" align="center" sx={{fontFamily : '"Kaushan Script", cursive' , color : "#D8D8D8" }} >
        YOUR CART
      </Typography>
      <Grid container spacing={6}>
        <Grid item sm={12} md={8}>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </Grid>

        <Grid item sm={12} md={4}>
          <Card
            sx={{
              margin: "20px 0px",
              display: "flex",
              justifyContent: "space-between",
              backgroundColor : '#D8D8D8'
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{color : "#686D76"}}>
                Your Total
              </Typography>
              <Typography variant="h4" gutterBottom sx={{color : "#686D76"}}>
                ₹ {total.toFixed(2)}
              </Typography>
            </CardContent>
            <CardContent
              sx={{ display: "flex", alignItems: "end", justifyContent: "end" }}
            >
              <Button variant="contained" color="primary" size="small">
                {" "}
                Pay Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
