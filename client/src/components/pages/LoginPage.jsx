import React, { useState } from 'react';

export default function Login({ signinHandler }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div style={outer}>
      <form style={formStyle} onSubmit={(e) => signinHandler(e, form)}>
        <h2 style={title}>
          <span role="img" aria-label="login">
            ➡️
          </span>{' '}
          Вход в аккаунт
        </h2>
        <p style={subtitle}>Войдите, чтобы сохранять свои дизайны</p>

        <label style={label}>Email</label>
        <input
          name="email"
          type="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={handleChange}
          style={input}
          autoComplete="email"
        />

        <label style={label}>Пароль</label>
        <div style={inputBox}>
          <input
            name="password"
            type={showPass ? 'text' : 'password'}
            placeholder="Введите пароль"
            value={form.password}
            onChange={handleChange}
            style={{ ...input, paddingRight: 30 }}
            autoComplete="current-password"
          />
          <span onClick={() => setShowPass((p) => !p)} style={eyeBtn}>
            {showPass ? '🙈' : '👁️'}
          </span>
        </div>

        <button type="submit" style={btn}>
          Войти
        </button>
        <div style={bottomText}>
          Нет аккаунта?{' '}
          <a href="/signup" style={regLink}>
            Зарегистрироваться
          </a>
        </div>
      </form>
    </div>
  );
}

// Стили (можно выносить в отдельный CSS)
const outer = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#faf6ff',
};
const formStyle = {
  width: 350,
  padding: 32,
  background: '#fff',
  borderRadius: 14,
  boxShadow: '0 4px 32px #c7b6ed44',
  display: 'flex',
  flexDirection: 'column',
  gap: 13,
  alignItems: 'stretch',
};
const title = { textAlign: 'center', margin: 0, fontWeight: 600, color: '#222' };
const subtitle = {
  textAlign: 'center',
  marginBottom: 14,
  fontSize: 14,
  color: '#696969',
};
const label = { fontSize: 14, fontWeight: '500', color: '#222' };
const input = {
  fontSize: 15,
  padding: '10px 14px',
  border: '1px solid #d6c9f9',
  borderRadius: 8,
  outline: 'none',
};
const btn = {
  marginTop: 8,
  background: 'linear-gradient(90deg, #AE5CFF 0%, #8879E7 100%)',
  color: '#fff',
  border: 'none',
  borderRadius: 8,
  fontWeight: 600,
  padding: '10px 0',
  fontSize: 16,
  cursor: 'pointer',
};
const inputBox = { position: 'relative' };
const eyeBtn = {
  position: 'absolute',
  right: 8,
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  fontSize: 18,
  opacity: 0.7,
};
const bottomText = { marginTop: 12, textAlign: 'center', fontSize: 14, color: '#818181' };
const regLink = { color: '#AE5CFF', textDecoration: 'underline', marginLeft: 5 };
