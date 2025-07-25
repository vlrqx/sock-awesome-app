import React, { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router';
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
  const { userId } = useParams();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        if (!userId) {
          throw new Error("User ID is required");
        }
        const response = await axios(`/api/cart/${userId}`);
        setCartItems(response.data.items);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
    // if (userId) fetchCart();
  }, [userId]);

  const updateQuantity = async (id, newQuantity) => {
    if (newQuantity < 1) return;

    try {
      await axios.put(`/api/cart/${id}`, { quantity: newQuantity });
      setCartItems((items) =>
        items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)),
      );
    } catch (error) {
      console.error('Update quantity error:', error);
    }
  };

  const removeItem = async (id) => {
    try {
      await axios.delete(`/api/cart/${id}`);
      setCartItems((items) => items.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Remove item error:', error);
    }
  };

  const handleCheckOut = async () => {
    try {
      const orderData = {
        items: cartItems,
        total: getTotalPrice(),
      };
      await axios.post('/api/orders', orderData);
      setCartItems([]);
      return true;
    } catch (error) {
      console.error('Checkout error:', error);
      return false;
    }
  };

  const getTotalPrice = () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const getTotalItems = () => cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Routes>
      <Route element={<WishListPage />} />
      <Route element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route
        path="/cart"
        element={
          <CartPage
            cartItems={cartItems}
            loading={loading}
            error={error}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
            handleCheckOut={handleCheckOut}
            getTotalPrice={getTotalPrice}
            getTotalItems={getTotalItems}
          />
        }
      />
      <Route path='*' element={<ErrorPage />} />
      <Route element={<LoginPage />} />
      <Route element={<RegistrationPage />} />
      <Route element={<SockGeneratorPage />} />
    </Routes>
  );
}

export default App;
