import React from 'react';
import NavBar from '../ui/NavBar';
import { Outlet } from 'react-router';

export default function Layout({ user, logoutHandler }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header>
        <NavBar user={user} logoutHandler={logoutHandler} />
      </header>
      <Outlet />
      <footer></footer>
    </div>
  );
}
