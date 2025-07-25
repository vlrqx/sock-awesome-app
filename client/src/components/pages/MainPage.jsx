import React from 'react';
import './MainPage.css';
import { useNavigate } from 'react-router';

export default function MainPage() {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <section className="hero-section">
        <h1 className="main-title">Добро пожаловать в SockAwesome App</h1>
        <p className="sub-title">
          Выбирайте цвета, узоры и картинки для создания уникальных носков. Видите
          результат мгновенно и заказывайте с доставкой домой.
        </p>

        <div className="button-group">
          <button className="primary-btn" onClick={() => navigate('socksconstructor')}>
            Начать создание
          </button>
          <button className="secondary-btn" onClick={() => navigate('wishlist')}>
            Посмотреть галерею
          </button>
        </div>
      </section>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🎨</div>
          <h3 className="feature-title">Легко создавать</h3>
          <p className="feature-desc">Интуитивный редактор для всех</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3 className="feature-title">Мгновенное превью</h3>
          <p className="feature-desc">Видите результат в реальном времени</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">👌</div>
          <h3 className="feature-title">Качественная печать</h3>
          <p className="feature-desc">Высокое качество материалов</p>
        </div>
      </div>
    </div>
  );
}
