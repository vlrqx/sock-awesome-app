import React, { useState, useEffect, useRef } from 'react';
import { Toaster, toast } from 'sonner';
import axios from 'axios';
import axiosInstance from '../../api/axiosInstance';

const colors = [
  { name: 'Белый', value: '#FFFFFF' },
  { name: 'Чёрный', value: '#000000' },
  { name: 'Красный', value: '#EF4444' },
  { name: 'Синий', value: '#3B82F6' },
  { name: 'Зелёный', value: '#10B981' },
  { name: 'Жёлтый', value: '#F59E0B' },
  { name: 'Фиолетовый', value: '#8B5CF6' },
  { name: 'Розовый', value: '#EC4899' },
];

const patterns = [
  { name: 'Полоски', value: 'stripes' },
  { name: 'Горошек', value: 'dots' },
  { name: 'Звёзды', value: 'stars' },
  { name: 'Сердечки', value: 'hearts' },
  { name: 'Геометрия', value: 'geometric' },
  { name: 'Однотонный', value: 'solid' },
];

function PatternDefs({ selectedColor }) {
  return (
    <>
      <pattern id="stripes" patternUnits="userSpaceOnUse" width="8" height="8">
        <rect width="8" height="4" fill={selectedColor} />
        <rect y="4" width="8" height="4" fill="#f0f0f0" />
      </pattern>
      <pattern id="dots" patternUnits="userSpaceOnUse" width="12" height="12">
        <rect width="12" height="12" fill={selectedColor} />
        <circle cx="6" cy="6" r="2" fill="#f0f0f0" />
      </pattern>
      <pattern id="stars" patternUnits="userSpaceOnUse" width="15" height="15">
        <rect width="15" height="15" fill={selectedColor} />
        <polygon
          points="7.5,2 9,6 13,6 10,9 11.5,13 7.5,10.5 3.5,13 5,9 2,6 6,6"
          fill="#f0f0f0"
        />
      </pattern>
      <pattern id="hearts" patternUnits="userSpaceOnUse" width="16" height="16">
        <rect width="16" height="16" fill={selectedColor} />
        <path
          d="M8,13 C8,13 3,8 3,5 C3,3 5,2 8,5 C11,2 13,3 13,5 C13,8 8,13 8,13 Z"
          fill="#f0f0f0"
        />
      </pattern>
      <pattern id="geometric" patternUnits="userSpaceOnUse" width="10" height="10">
        <rect width="10" height="10" fill={selectedColor} />
        <polygon points="5,0 10,5 5,10 0,5" fill="#f0f0f0" />
      </pattern>
    </>
  );
}

function SockSVG({ selectedColor, selectedPattern, uploadedImage }) {
  const baseFill =
    selectedPattern === 'solid' ? selectedColor : `url(#${selectedPattern})`;

  return (
    <svg
      width={330}
      height={415}
      viewBox="4700 4650 440 550"
      xmlns="http://www.w3.org/2000/svg"
      style={{ background: 'transparent' }}
    >
      <defs>
        <PatternDefs selectedColor={selectedColor} />
        <clipPath id="sock-upload-circle">
          {/* Эллипс вместо круга для области "между резинкой и пяткой" */}
          <circle cx="4817" cy="4905" r="58" />
        </clipPath>
      </defs>

      {/* Главный контур носка */}
      <path
        d="M4757 4734.3336C4756.5517 4744.8243 4759.3701 4765.7229 4762.0707 4788.2351C4763.0866 4796.7033 4761.3008 4816.2755 4762.1403 4825.5797C4763.3157 4838.6057 4767.0084 4841.2474 4766.4348 4851.8186C4765.1123 4876.1933 4745.3509 4924.521 4742.027 4951.5547C4732.3574 5030.1983 4736 5061.3336 4736 5061.3336C4736 5061.3336 4864.803 5119.2548 4864.803 5119.2548C4864.803 5119.2548 5017 5143.3336 5017 5143.3336C5017 5143.3336 5033.2216 5140.6188 5042.5729 5127.523C5049.2524 5118.1689 5049.9776 5097.1512 5049.9776 5097.1512C5049.9776 5097.1512 5060.2332 5079.4468 5059.4888 5062.7424C5058.7444 5046.038 5047 5030.3336 5047 5030.3336C5047 5030.3336 4950.3171 5014.0421 4950.3171 5014.0421C4950.3171 5014.0421 4884 4978.3336 4884 4978.3336C4884 4978.3336 4880.9358 4951.7138 4880.8688 4923.9365C4880.7956 4893.634 4883.7192 4861.9542 4883.7192 4861.9542C4883.7192 4861.9542 4881.0394 4832.0491 4887.3596 4800.1439C4893.6798 4768.2388 4909 4734.3336 4909 4734.3336C4909 4734.3336 4905.3151 4712.6838 4860.3941 4710.3736C4837.1591 4709.1787 4759.6942 4671.2901 4757 4734.3336Z"
        fill={baseFill}
        stroke="#dddddd"
        strokeWidth={2}
      />

      {/* Детали */}
      <path
        d="M4744 4954C4756.3591 4961.0754 4782.8719 4963.5722 4795.6283 4970.7066C4839 4994.9636 4838 5005.7034 4838 5005.7034C4838 5005.7034 4849 5058.7798 4849 5058.7798C4849 5058.7798 4838 5107 4838 5107"
        fill="none"
        stroke="#b5adce"
        strokeWidth={4}
        opacity={0.5}
      />
      <path
        d="M5046 5034C5046 5034 5011 5050.5 5011 5050.5C5011 5050.5 4996 5083 4996 5083C4996 5083 4996.5 5119.5 4996.5 5119.5C4996.5 5119.5 5019 5140 5019 5140"
        fill="none"
        stroke="#b5adce"
        strokeWidth={4}
        opacity={0.5}
      />
      <path
        d="M4759 4720C4759 4720 4902 4751 4902 4751"
        fill="none"
        stroke="#bbbbbb"
        strokeWidth={3}
        strokeDasharray="9,5"
      />
      <path
        d="M4758 4747C4758 4747 4891 4778 4891 4778"
        fill="none"
        stroke="#bbbbbb"
        strokeWidth={3}
        strokeDasharray="9,5"
      />

      {uploadedImage && (
        <image
          href={uploadedImage}
          x={4680}
          y={4765}
          width={280}
          height={280}
          clipPath="url(#sock-upload-circle)"
          // preserveAspectRatio="xMidYMid slice"
        />
      )}
    </svg>
  );
}

export default function SockGeneratorPage({ user }) {
  const [selectedColor, setSelectedColor] = useState(colors[0].value);
  const [selectedPattern, setSelectedPattern] = useState(patterns[5].value);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedDesign, setSelectedDesign] = useState({});

  const [toastMsg, setToastMsg] = useState('');
  const [hasChanges, setHasChanges] = useState(false);
  const userId = user.id;

  const currColorName = colors.find((c) => c.value === selectedColor).name;

  const onColorChange = (val) => {
    if (val !== selectedColor) {
      setSelectedColor(val);
      if (!hasChanges) setHasChanges(true);
      toast('Цвет изменен! ✅');
    }
  };

  const onPatternChange = (val) => {
    if (val !== selectedPattern) {
      setSelectedPattern(val);
      if (!hasChanges) setHasChanges(true);
      toast('Узор изменен! ✅');
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      toast('Картинка слишком большая (до 5МБ)');
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      setUploadedImage(ev.target.result);
      if (!hasChanges) setHasChanges(true);
      toast('Картинка загружена! ✅');
    };
    reader.readAsDataURL(file);
  };

  const handleAddToFavorites = async () => {
    const designSock = {
      color: colors.find((c) => c.value === selectedColor).value,
      pattern: patterns.find((p) => p.value === selectedPattern).name,
      img: 'asfafasf',
    };

    try {
      await axiosInstance.post('/api/designsocks/design', designSock);
      console.log(designSock);
      await axiosInstance.post('/api/designsocks/tofavorite', { userId, designSock });
      toast('Сохранено в избранное!');
    } catch {
      toast('Ошибка при сохранении!');
    }
  };

  const handleAddToCart = async () => {
    const designSock = {
      color: colors.find((c) => c.value === selectedColor).value,
      pattern: patterns.find((p) => p.value === selectedPattern).name,
      img: 'asfasfasf',
    };
    try {
      await axiosInstance.post('/api/designsocks/design', designSock);
      await axiosInstance.post('/api/designsocks/tocart', { userId, designSock });
      toast('Добавлено в корзину!');
    } catch {
      toast('Ошибка при добавлении!');
    }
  };

  return (
    <div style={styles.root}>
      <Toaster position="bottom-right" />
      <h2 style={styles.title}>
        Генератор <span style={styles.textAccent}>носков</span>
      </h2>
      <p style={styles.subtitle}>
        Создайте уникальный дизайн — выбирайте цвет, узор и загрузите свою картинку!
      </p>
      <div style={styles.layout}>
        <div style={styles.preview}>
          <SockSVG
            selectedColor={selectedColor}
            selectedPattern={selectedPattern}
            uploadedImage={uploadedImage}
          />
          <div style={styles.actions}>
            <button
              style={styles.ghostBtn}
              onClick={(() => toast('Добавлено в избранное ❤️'), handleAddToFavorites)}
            >
              ♥ В избранное
            </button>
            <button
              style={styles.primaryBtn}
              onClick={(() => toast('Добавлено в корзину 🛒'), handleAddToCart)}
            >
              В корзину — 990₽
            </button>
          </div>
          {toastMsg && <div style={styles.toast}>{toastMsg}</div>}
        </div>

        <div style={styles.controls}>
          <div style={styles.card}>
            <div style={styles.sectionTitle}>Цвет носка</div>
            <div style={styles.colors}>
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => onColorChange(color.value)}
                  style={{
                    ...styles.colorDot,
                    background: color.value,
                    border:
                      selectedColor === color.value
                        ? '2px solid #AE5CFF'
                        : '1px solid #ccc',
                    boxShadow:
                      selectedColor === color.value ? '0 0 0 4px #efdbffd2' : 'none',
                  }}
                  title={color.name}
                />
              ))}
            </div>
            <span style={styles.note}>Выбран: {currColorName}</span>
          </div>

          <div style={styles.card}>
            <div style={styles.sectionTitle}>Узор</div>
            <div style={styles.patternGrid}>
              {patterns.map((pat) => (
                <button
                  key={pat.value}
                  onClick={() => onPatternChange(pat.value)}
                  style={{
                    ...styles.patternBtn,
                    background:
                      selectedPattern === pat.value
                        ? 'linear-gradient(90deg, #AE5CFF 30%, #8879E7 100%)'
                        : '#faf6ff',
                    color: selectedPattern === pat.value ? '#fff' : '#5f4696',
                  }}
                >
                  {pat.name}
                </button>
              ))}
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.sectionTitle}>Загрузить картинку</div>
            <label htmlFor="upload-img" style={styles.uploadBox}>
              <div>
                <span
                  role="img"
                  aria-label="upload"
                  style={{ fontSize: 32, display: 'block' }}
                >
                  🖼️
                </span>
                <div>Нажмите для загрузки картинки</div>
                <div style={{ color: '#8955d4', fontSize: 12, marginTop: 4 }}>
                  PNG, JPG до 5МБ
                </div>
              </div>
              <input
                type="file"
                id="upload-img"
                accept="image/png,image/jpeg,image/jpg"
                style={{ display: 'none' }}
                onChange={handleImageUpload}
              />
            </label>
            {uploadedImage && (
              <div style={styles.uploadedInfo}>
                ✓ Картинка загружена
                <button style={styles.cleanBtn} onClick={() => setUploadedImage(null)}>
                  Удалить
                </button>
              </div>
            )}
          </div>

          {hasChanges && (
            <div style={{ ...styles.card, background: '#f6efff' }}>
              <div style={styles.priceBox}>
                <div>
                  <div style={{ fontWeight: 600 }}>Ваш дизайн готов!</div>
                  <div style={{ color: '#786d90', fontSize: 13 }}>
                    Высококачественная печать
                  </div>
                </div>
                <div style={styles.price}>990₽</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  root: {
    padding: '80px 32px 60px',
    background: '#faf6ff',
    minHeight: '100vh',
  },
  title: {
    fontSize: 28,
    fontWeight: 700,
    margin: 0,
    marginBottom: 8,
    letterSpacing: '-1px',
  },
  textAccent: {
    background: 'linear-gradient(90deg,#ae5cff,#8879e7)',
    color: 'transparent',
    WebkitBackgroundClip: 'text',
    fontWeight: 900,
  },
  subtitle: { color: '#7a7796', maxWidth: 480, marginBottom: 34 },
  layout: {
    display: 'flex',
    gap: 38,
    maxWidth: 1300,
    margin: '0 auto',
    justifyContent: 'space-between',
  },
  preview: {
    background: '#fff',
    borderRadius: 22,
    boxShadow: '0 8px 38px #c7b6ed44',
    padding: 44,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: 430,
    minHeight: 620,
  },
  actions: { display: 'flex', gap: 18, marginTop: 20 },
  ghostBtn: {
    background: '#f3edfa',
    color: '#8955d4',
    border: '1.5px solid #d1b9ee',
    borderRadius: 12,
    fontWeight: 600,
    fontSize: 15,
    padding: '8px 18px',
    cursor: 'pointer',
    transition: 'all .17s',
  },
  primaryBtn: {
    background: 'linear-gradient(90deg,#ae5cff,#8879e7)',
    color: '#fff',
    border: 'none',
    borderRadius: 12,
    fontWeight: 600,
    fontSize: 15,
    padding: '8px 20px',
    cursor: 'pointer',
    transition: 'all .18s',
  },
  toast: {
    marginTop: 17,
    color: '#8967f4',
    background: '#f3edfa',
    padding: '6px 15px',
    borderRadius: 9,
    fontWeight: 600,
    fontSize: 16,
    userSelect: 'none',
    minWidth: 200,
    textAlign: 'center',
  },
  controls: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 28,
    minWidth: 320,
    maxWidth: 400,
  },
  card: {
    background: '#fff',
    borderRadius: 14,
    padding: '18px 20px',
    marginBottom: 3,
    boxShadow: '0 2.5px 14px #f0eaff22',
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
  },
  colors: { display: 'flex', flexWrap: 'wrap', gap: 12 },
  colorDot: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    outline: 'none',
    cursor: 'pointer',
    border: '1px solid #B1A5D2',
  },
  note: { fontSize: 14, marginTop: 7, color: '#786d90' },
  sectionTitle: { fontWeight: 600, marginBottom: 6, color: '#3c267a', fontSize: 15 },
  patternGrid: { display: 'flex', flexWrap: 'wrap', gap: 10 },
  patternBtn: {
    border: 'none',
    background: '#faf6ff',
    color: '#6546bb',
    fontWeight: 500,
    borderRadius: 8,
    padding: '10px 18px',
    cursor: 'pointer',
    fontSize: 16,
    minWidth: 120,
    marginBottom: 5,
  },
  uploadBox: {
    border: '2px dashed #a285ee',
    cursor: 'pointer',
    borderRadius: 8,
    padding: '28px 0',
    textAlign: 'center',
    background: '#f9f5ff',
    marginBottom: 8,
    transition: 'border .2s',
  },
  uploadedInfo: {
    fontSize: 14,
    color: '#4cc37a',
    marginTop: 8,
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  cleanBtn: {
    border: 'none',
    color: '#ff4e98',
    background: 'none',
    fontSize: 14,
    cursor: 'pointer',
    marginLeft: 8,
  },
  priceBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    background: '#edd4ff',
    color: '#9658e6',
    fontWeight: 700,
    fontSize: 22,
    borderRadius: 11,
    padding: '10px 24px',
    marginLeft: 12,
  },
};
