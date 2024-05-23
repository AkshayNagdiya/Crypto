import { AppBar, Badge, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutUser } from "../features/auth/authSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  return (
    <>
      <AppBar color="error">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontFamily: '"Kaushan Script", cursive',
              fontSize: "30px",
            }}
          >
            <Link to={"/"}>Bcrypt</Link>
          </Typography>
          {user ? (
            <>
              <Link to={"/cart"}>
                <Badge badgeContent={cartItems.length} color="error">
                  <Button variant="contained" color="secondary" size="small">
                    <ShoppingCartIcon />
                  </Button>
                </Badge>
              </Link>
              <Button
                variant="contained"
                color="error"
                size="small"
                sx={{ margin: "0px 15px" }}
                onClick={handleLogout}
              >
                <LogoutIcon />
              </Button>
            </>
          ) : (
            <>
              <Link to={"/register"}>
                <Button variant="contained" color="secondary">
                  Register
                </Button>
              </Link>
              <Link to={"/login"}>
                <Button
                  variant="contained"
                  sx={{ margin: "0px 20px" }}
                  color="success"
                >
                  Login
                </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
