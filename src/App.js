import React, { useState } from 'react';
import { GlobalProvider } from './context/GlobalContext';
import { CartProvider } from './context/CartContext';
import Header from "./components/molecules/Header/Header";
import Products from './pages/Products/Products';
import Footer from './components/molecules/Footer/Footer';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home';
import Password from './components/molecules/Password/Password';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Error from './components/atoms/Error/Error';
import SuccessCmp from './components/molecules/SuccessCmp/SuccessCmp';
import Layout from './Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/atoms/Login/Login';
import Profile from './components/molecules/Profile/Profile';
import SignUp from './components/atoms/SignUp/SignUp';
import "./sass/main.scss";

function App() {
  return (
    <GlobalProvider>
      <CartProvider >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/" element={<Layout />}>
              <Route path='products' element={<Products />}></Route>
              <Route path='products/:id' element={<ProductDetail />}></Route>
              <Route path='checkout' element={<Checkout />}></Route>
              <Route path='password' element={<Password />}></Route>
              <Route path='success' element={<SuccessCmp />}></Route>
            </Route>
            <Route path='signup' element={<SignUp />}></Route>
            <Route path='profile' element={<Profile />}></Route>
            <Route path='*' element={<Error />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </GlobalProvider>
  );
}

export default App;
