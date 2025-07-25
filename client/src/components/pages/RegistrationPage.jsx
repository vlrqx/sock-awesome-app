import React, { useState } from 'react';

export default function Registration({ signupHandler }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div style={outer}>
      <form style={formStyle} onSubmit={(e) => signupHandler(e, form)}>
        <h2 style={title}>
          <span role="img" aria-label="Регистрация">
            🧑‍💻
          </span>{' '}
          Регистрация
        </h2>
        <p style={subtitle}>Создайте аккаунт для сохранения дизайнов</p>

        <label style={label}>Имя</label>
        <input
          style={input}
          name="name"
          placeholder="Ваше имя"
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
        />

        <label style={label}>Email</label>
        <input
          style={input}
          name="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={handleChange}
          type="email"
          autoComplete="email"
        />

        <label style={label}>Пароль</label>
        <div style={inputBox}>
          <input
            style={{ ...input, paddingRight: 30 }}
            name="password"
            type={showPass ? 'text' : 'password'}
            placeholder="Минимум 6 символов"
            value={form.password}
            onChange={handleChange}
            autoComplete="new-password"
          />
          <span onClick={() => setShowPass((p) => !p)} style={eyeBtn}>
            {showPass ? '🙈' : '👁️'}
          </span>
        </div>

        <button type="submit" style={btn}>
          Создать аккаунт
        </button>
        <div style={bottomText}>
          Уже есть аккаунт?{' '}
          <a href="/login" style={loginLink}>
            Войти
          </a>
        </div>
      </form>
    </div>
  );
}

// Стили (можно вынести в отдельный CSS или использовать CSS modules)
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
  marginBottom: 16,
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
  right: 6,
  top: '48%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  fontSize: 18,
  opacity: 0.7,
};
const bottomText = { marginTop: 12, textAlign: 'center', fontSize: 14, color: '#818181' };
const loginLink = { color: '#AE5CFF', textDecoration: 'underline', marginLeft: 5 };
