import React from 'react'
import { Route, Routes } from 'react-router'
import Home from "./pages/home";
import About from "./pages/about";
import Cart from "./pages/cart";
import Collection from "./pages/collection";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Orders from "./pages/orders";
import PlaceOrder from "./pages/place_order";
import Product from "./pages/product";
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Searchbar from './components/Searchbar';
import { ToastContainer, toast } from 'react-toastify';
import OrderConfirmation from './pages/Order_confimationproject';
export default function App(){
    return(
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]bg-white/60 backdrop-blur-lg shadow-md shadow-gray-300'>
        <ToastContainer></ToastContainer>
        <Navbar></Navbar>
        <Searchbar></Searchbar>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collections" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path='/order-confirmation' element={<OrderConfirmation></OrderConfirmation>}></Route>
        <Route path="/product/:productId" element={<Product />} />
        </Routes>
        <Footer></Footer>
        </div>
    )
}
