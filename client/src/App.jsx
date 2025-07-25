import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const signupHandler = (e, formData) => {
    e.preventDefault();
    axios
      .post('/api/auth/signup', formData)
      .then((res) => {
        setUser(res.data.user);
        setAccessToken(res.data.accessToken);
      })
      .catch(console.error);
    navigate('/');
  };

  const signinHandler = (e, formData) => {
    e.preventDefault();
    axios
      .post('/api/auth/signin', formData)
      .then((res) => {
        setUser(res.data.user);
        setAccessToken(res.data.accessToken);
      })
      .catch(console.error);
    navigate('/');
  };

  useEffect(() => {
    axios
      .get('/api/auth/refresh')
      .then((res) => {
        setUser(res.data.user);
        setAccessToken(res.data.accessToken);
      })
      .finally(() => setLoading(false));
  }, []);

  const logoutHandler = () => {
    axios.delete('/api/auth/logout').then(() => setUser(null));
    navigate('/');
  };

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <Routes>
      <Route element={<Layout user={user} logoutHandler={logoutHandler} />}>
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/signin" element={<LoginPage signinHandler={signinHandler} />} />
        <Route
          path="/signup"
          element={<RegistrationPage signupHandler={signupHandler} />}
        />
        <Route path="socksconstructor" element={<SockGeneratorPage user={user} />} />
      </Route>
    </Routes>
  );
}

export default App;
