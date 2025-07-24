import React from 'react';
import { Route, Routest } from 'react-router';
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

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<WishListPage />} />
        <Route element={<MainPage />} />
        <Route element={<AboutPage />} />
        <Route element={<CartPage />} />
        <Route element={<ErrorPage />} />
        <Route element={<LoginPage />} />
        <Route element={<RegistrationPage />} />
        <Route element={<SockGeneratorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
