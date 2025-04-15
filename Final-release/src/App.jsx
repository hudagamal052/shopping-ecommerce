import React from 'react'
import { Form, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Products from './components/products'
import Footerofproducts from './components/footerofproducts'
import Cardsofproducts from './components/Cardsofproducts'
import Homepage from './components/Homepage'
import Login from './components/login'
import SignUp from './components/signup';
import Dashboard from './components/dashboard';
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import Sidebar from "./components/sidebar";

import Rootlayout from './pages/Rootlayout';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import FavoritePage from './pages/FavoritePage';
import Payment from './components/Payment';
import { ShopProvider } from './context/ShopContext';


function App() {
  return (
   <>

      <ShopProvider>
        <Routes>
          <Route path="/" element={<Rootlayout />}>
            <Route index={true} element={<Homepage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cards" element={<Cardsofproducts />} />
            <Route path="/signup" element={<SignUp></SignUp>} />
            <Route path="/dashboard" element={<Dashboard></Dashboard>} />
            < Route path="/category" element={<CategoryPage />} />
            < Route path="/subcategory/:subcategoryId" element={<ProductPage />} />
            <Route path="/product/:productId" element={<ProductDetailsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/favorite" element={<FavoritePage />} />
            <Route path="/payment" element={<Payment />} />
          </Route >
            <Route path="/login" element={<Login />} />
        </Routes>
      </ShopProvider >


    </>

  )
}

export default App

