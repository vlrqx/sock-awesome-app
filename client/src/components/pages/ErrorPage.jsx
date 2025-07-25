import React from 'react';

export default function ErrorPage({ code = 404, message }) {
  const errorMessages = {
    404: 'Страница не найдена',
    500: 'Внутренняя ошибка сервера',
    403: 'Доступ запрещён',
    default: 'Что-то пошло не так',
  };

  const description = message || errorMessages[code] || errorMessages.default;

  return (
    <div style={styles.root}>
      <div style={styles.container}>
        <h1 style={styles.code}>{code}</h1>
        <p style={styles.title}>{description}</p>
        <a href="/" style={styles.link}>
          На главную
        </a>
      </div>
    </div>
  );
}

const styles = {
  root: {
    height: '100vh',
    background: 'linear-gradient(90deg, #ae5cff 0%, #8879e7 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    background: '#fff',
    borderRadius: 16,
    padding: '36px 64px',
    boxShadow: '0 6px 38px #c7b6ed44',
    textAlign: 'center',
  },
  code: {
    fontSize: 88,
    fontWeight: 900,
    margin: 0,
    color: '#ae5cff',
    letterSpacing: '-5px',
  },
  title: {
    fontSize: 25,
    fontWeight: 600,
    margin: '18px 0 32px',
    color: '#3c267a',
  },
  link: {
    display: 'inline-block',
    padding: '12px 38px',
    borderRadius: 10,
    background: 'linear-gradient(90deg, #ae5cff 0%, #8879e7 100%)',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: 17,
    boxShadow: '0 2px 8px #e1deff44',
    transition: '.18s',
  },
};
