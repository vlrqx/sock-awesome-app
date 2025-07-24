import React from 'react';
import { Route, Routes } from 'react-router';
import axios from 'axios';
import Layout from './components/pages/Layout';
import WishListPage from './components/pages/WishListPage';
import RegistrationPage from './components/pages/RegistrationPage';
import SockGeneratorPage from './components/pages/SockGeneratorPage';
import MainPage from './components/pages/MainPage';
import AboutPage from './components/pages/AboutPage';
import ErrorPage from './components/pages/ErrorPage';
import LoginPage from './components/pages/LoginPage';
import CartPage from './components/pages/CartPage';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  return (
    <Routes>
      <Route path="/wishlist" element={<WishListPage />} />
      <Route path="/" element={<MainPage />} />
      <Route element={<AboutPage />} />
      <Route element={<CartPage />} />
      <Route element={<ErrorPage />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/signup" element={<RegistrationPage />} />
      <Route path="/socksconstructor" element={<SockGeneratorPage />} />
    </Routes>
  );
}

export default App;
