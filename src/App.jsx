import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Container } from "@mui/material"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CoinPage from "./pages/CoinPage"
import Cart from "./pages/Cart"
import PrivateRoutes from "./pages/PrivateRoutes"



function App() {

  return (
    <Router>
      <Navbar />
      <Container sx={{ padding: '80px 0px' }}>
        <Routes>
          
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoutes/>}>
          <Route path="/" element={<Home />} />
          <Route path="coin/:id" element = {<CoinPage/>}/>
          <Route path="cart" element={<Cart />} />
          </Route>
       

        </Routes>
        <ToastContainer />
      </Container>
    </Router>
  )
}

export default App
