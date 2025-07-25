import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router';
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from './api/axiosInstance';

function App() {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [wishproduct, setWishproduct] = useState([]);

  const { userId } = useParams();
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchCart = async () => {
  //     try {
  //       if (!userId) {
  //         throw new Error('User ID is required');
  //       }
  //       const response = await axios(`/api/cart/${userId}`);
  //       setCartItems(response.data.items);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchCart();
  //   // if (userId) fetchCart();
  // }, [userId]);

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

  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const getTotalItems = () => cartItems.reduce((total, item) => total + item.quantity, 0);

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

  useEffect(() => {
    if (user) {
      axiosInstance
        .get(`/api/favorite/${user.id}`)
        .then((response) => setWishproduct(response.data))
        .catch((error) => console.error('Ошибка:', error));
    }
  }, [user]);

  const logoutHandler = () => {
    axios.delete('/api/auth/logout').then(() => setUser(null));
    navigate('/');
  };

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <Routes>
      <Route
        element={
          <Layout
            user={user}
            logoutHandler={logoutHandler}
            wishproduct={wishproduct}
            setWishproduct={setWishproduct}
          />
        }
      >
        <Route
          path="/wishlist"
          element={
            <WishListPage
              user={user}
              wishproduct={wishproduct}
              setWishproduct={setWishproduct}
            />
          }
        />
        <Route path="/" element={<MainPage />} />
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
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/signin" element={<LoginPage signinHandler={signinHandler} />} />
        <Route
          path="/signup"
          element={<RegistrationPage signupHandler={signupHandler} />}
        />
        <Route
          path="/socksconstructor"
          element={
            <SockGeneratorPage
              user={user}
              setWishproduct={setWishproduct}
              wishproduct={wishproduct}
            />
          }
        />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
