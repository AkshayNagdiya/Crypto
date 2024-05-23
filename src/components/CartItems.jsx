import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removeCart,
} from "../features/cart/CartSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartItems = ({ item }) => {
  const { name, id, price, image } = item;
  let {qty} = item

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeCart(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQty({ id }));
  };

  const handleDercement = (id) => {
    qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0);
  };

  return (
    <Card sx={{ margin: "20px 0px", display: "flex" , padding : "10px 20px" , backgroundColor : "#D8D8D8"}}>
      <CardMedia image={image} sx={{ height: "100px", width: "100px" }} />
      <CardContent sx={{ flexGrow: "1"}}>
        <Typography variant="h5" gutterBottom sx={{color : "#686D76"}}>
          {name}
        </Typography>
        <Typography variant="h6" gutterBottom sx={{color : "#686D76"}}>
          Price : ₹{price}
        </Typography>

        <Grid
          item
          sx={{ display: " flex", alignItems: " end", justifyContent: "end", flexDirection : "column"}}
        >
          <Button variant="outlined" size="small" sx={{margin : "10px 0px"}}>
            <Button
              variant="text"
              size="small"
              onClick={() => handleDercement(id)}
            >
              <RemoveIcon />
            </Button>
            <Typography variant="h6">{qty}</Typography>
            <Button
              variant="text"
              size="small"
              onClick={() => handleIncrement(id)}
            >
              <AddIcon />
            </Button>
          </Button>

          <Button
            variant="contained"
            color="error"
            size="small"
            gutterBottom
            onClick={() => handleRemove(id)}
          >
            <DeleteIcon />
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CartItems;
