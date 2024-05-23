import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  LinearProgress,
  Typography,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchCoin } from "../features/coins/coinSlice";
import LanguageIcon from "@mui/icons-material/Language";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { addToCart } from "../features/cart/CartSlice";


const CoinPage = () => {
  const { coin, isLoading, isError } = useSelector((state) => state.coins);
  // const { coins } = useSelector((state) => state.coins)
  const image = coin?.image?.large;
  const price = coin.market_data?.current_price?.inr;

  const { id, name } = coin;
  console.log(id);

  const params = useParams();
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart({ id, name, price, image, qty: 1 }));
  };

  useEffect(() => {
    dispatch(fetchCoin(params.id));
  }, []);

  if (isLoading || !coin) {
    return (
      <Container sx={{ padding: "50px 0px" }}>
        <LinearProgress />
      </Container>
    );
  }
  if (isError) {
    return (
      <Container sx={{ padding: "50px 0px" }}>
        <Typography variant="h3" color={"error"} align="center">
          {" "}
          Something Went Wrong!!!
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ padding: "20px 0px", backgroundColor: "#D8D8D8" }}>
      <CardMedia
        image={coin.image?.large}
        sx={{
          maxWidth: "30%",
          aspectRatio: "1/1",
          objectFit: "contain",
          margin: "0 auto",
        }}
      />

      <Card sx={{ margin: "20px", backgroundColor: "#7F8487" }}>
        <Typography
          variant="h3"
          align="center"
          noWrap
          sx={{ margin: "10px 0px", color: "#D8D8D8" }}
        >
          {coin.name}
        </Typography>

        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ color: "#D8D8D8" }}>
            {" "}
            Symbol : {coin.symbol}
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ color: "#D8D8D8" }}>
            {" "}
            Price : $ {coin.market_data?.current_price?.usd}
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ color: "#D8D8D8" }}>
            {" "}
            Price : ₹ {coin.market_data?.current_price?.inr}
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: "#D8D8D8" }}>
            {" "}
            Description : {coin.description?.en}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={coin.links?.homepage[0]}>
            <Button variant="contained" color="primary">
              <LanguageIcon />
            </Button>
          </Link>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ShoppingCartIcon />}
            onClick={handleAdd}
          >
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default CoinPage;
