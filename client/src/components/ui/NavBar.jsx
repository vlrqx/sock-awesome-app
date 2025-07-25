import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router';

export default function NavBar({ logoutHandler, user, wishproduct, setWishproduct }) {
  const navigate = useNavigate();

  return (
    <nav style={navBarStyle}>
      <div style={leftBlock}>
        <img src="/logo.png" alt="icon" style={iconStyle} />
        <span onClick={() => navigate('/')} style={logoStyle}>
          SockAwesome App
        </span>
      </div>
      <div style={centerBlock}>
        <a
          onClick={() => navigate(user ? '/socksconstructor' : '/signin')}
          style={linkStyle}
        >
          Создать носки
        </a>
        <a onClick={() => navigate('/about')} style={linkStyle}>
          О нас
        </a>
      </div>
      <div style={rightBlock}>
        <div style={iconBtn}>
          <span onClick={() => navigate('/wishlist')}>♡</span>
          <span style={badge}>{user ? wishproduct.length : 0}</span>
        </div>
        <div style={iconBtn}>
          <span onClick={() => navigate('/cart')}>🛒</span>
          <span style={badge}>0</span>
        </div>
        {user ? (
          <>
            <a style={authLink}>Привет, {user.name} !</a>
            <button onClick={logoutHandler} style={registerBtn}>
              Выйти
            </button>
          </>
        ) : (
          <>
            <a onClick={() => navigate('/signin')} style={authLink}>
              Войти
            </a>
            <button onClick={() => navigate('/signup')} style={registerBtn}>
              Регистрация
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

const navBarStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 30px',
  background: '#fff',
  fontFamily: 'sans-serif',
};
const leftBlock = { display: 'flex', alignItems: 'center', gap: '8px' };
const iconStyle = { width: 20, height: 20 };
const logoStyle = { color: '#AE5CFF', fontWeight: 700, fontSize: 18, cursor: 'pointer' };
const centerBlock = { display: 'flex', gap: '25px', alignItems: 'center' };
const linkStyle = {
  color: '#1a1a1a',
  textDecoration: 'none',
  fontSize: 15,
  cursor: 'pointer',
};
const rightBlock = { display: 'flex', gap: '18px', alignItems: 'center' };
const iconBtn = { position: 'relative', fontSize: 18, cursor: 'pointer' };
const badge = {
  position: 'absolute',
  top: -8,
  right: -10,
  background: '#AE5CFF',
  color: '#fff',
  borderRadius: '50%',
  fontSize: 11,
  width: 17,
  height: 17,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
const authLink = {
  cursor: 'pointer',
  color: '#1a1a1a',
  textDecoration: 'none',
  fontSize: 15,
};
const registerBtn = {
  background: 'linear-gradient(90deg, #AE5CFF 0%, #8879E7 100%)',
  color: '#fff',
  border: 'none',
  borderRadius: 18,
  fontSize: 14,
  padding: '6px 18px',
  cursor: 'pointer',
};
