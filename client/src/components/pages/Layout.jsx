import React from 'react';
import './Footer.css';
import NavBar from '../ui/NavBar';
import { Outlet, useNavigate } from 'react-router';

export default function Layout({ user, logoutHandler }) {
  const navigate = useNavigate();
  return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header>
        <NavBar user={user} logoutHandler={logoutHandler} />
      </header>
      <Outlet />
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h1 className="footer-title">SockCraft</h1>
            <p className="footer-description">
              Создавайте уникальные носки с нашим интуитивным генератором дизайнов.
              <br />
              Качество, стиль и индивидуальность в каждой паре.
            </p>
          </div>

          <div className="footer-columns">
            <div className="footer-column">
              <h2 className="column-title">Навигация</h2>
              <ul className="footer-links">
                <li>
                  <a onClick={() => navigate('socksconstructor')}>Создать носки</a>
                </li>
                <li>
                  <a onClick={() => navigate('wishlist')}>Галерея</a>
                </li>
                <li>
                  <a href="/about">О нас</a>
                </li>
                <li>
                  <a href="/faq">Вопросы и ответы</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h2 className="column-title">Контакты</h2>
              <ul className="footer-contacts">
                <li>Москва, ул. Тверская, 15</li>
                <li>support@sockcraft.ru</li>
                <li>+7 (495) 123-45-67</li>
              </ul>
            </div>

            <div className="footer-column">
              <h2 className="column-title">Следите за нами</h2>
              <p className="footer-social">
                Делитесь своими дизайнами в соцсетях!
                <br />
                #SockCraft
              </p>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <p>© 2025 SockCraft. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}
