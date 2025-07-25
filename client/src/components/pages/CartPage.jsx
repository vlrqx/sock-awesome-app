// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { toast } from 'react-hot-toast';
// import './CartPage.css';

// export default function CartPage({
//   cartItems,
//   loading,
//   error,
//   updateQuantity,
//   removeItem,
//   handleCheckOut,
//   getTotalPrice,
//   getTotalItems
// }) {
//   const handleCheckoutWithToast = async () => {
//     const success = await handleCheckOut();
//     if (success) {
//       toast.success('Заказ оформлен!');
//     } else {
//       toast.error('Ошибка при оформлении заказа');
//     }
//   };

//   if (loading) return <div className="loading">Загрузка корзины...</div>;
//   if (error) return <div className="error">Ошибка: {error}</div>;

//   return (
//     <div className="cart-container">
//       <main className="container py-8">
//         <div className="cart-header">
//           <h1 className="cart-title"></h1>
//           <p className="cart-subtitle">
//             {cartItems.length > 0 ? `Товаров: ${getTotalItems()}` : 'Корзина пуста'}
//           </p>
//         </div>

//         {cartItems.length === 0 ? (
//           <div className="cart-empty-state">
//             <h3 className="cart-empty-title">Корзина пуста</h3>
//             <p className="cart-empty-text">
//               Добавьте понравившиеся дизайны носков в корзину
//             </p>
//             <button
//               className="cart-primary-button"
//               onClick={() => (window.location.href = '/designer')}
//             >
//               Создать новый дизайн
//             </button>
//           </div>
//         ) : (
//           <div className="cart-grid">
//             <div className="space-y-4">
//               {cartItems.map((item) => (
//                 <div key={item.id} className="cart-item">
//                   <div className="cart-item-content">
//                     <div className="cart-item-preview">
//                       <svg width="40" height="50" viewBox="0 0 200 300">
//                         <path
//                           d="M60 50 L140 50 L140 180 L160 180 L160 220 L120 220 L120 200 L80 200 L80 220 L40 220 L40 180 L60 180 Z"
//                           fill={item.color}
//                           stroke="#ddd"
//                           strokeWidth="2"
//                         />
//                       </svg>
//                     </div>

//                     <div className="cart-item-info">
//                       <h3 className="cart-item-name">{item.name}</h3>
//                       <p className="cart-item-details">
//                         Цвет: {item.color} • Узор: {item.pattern}
//                       </p>
//                       <span className="cart-item-price-badge">
//                         {item.price.toLocaleString()}₽
//                       </span>
//                     </div>

//                     <div className="cart-quantity-controls">
//                       <button
//                         className="cart-quantity-button"
//                         onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                       ></button>
//                       <input
//                         type="number"
//                         value={item.quantity}
//                         onChange={(e) =>
//                           updateQuantity(item.id, parseInt(e.target.value) || 1)
//                         }
//                         className="cart-quantity-input"
//                         min="1"
//                       />
//                       <button
//                         className="cart-quantity-button"
//                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                       ></button>
//                     </div>

//                     <div className="text-right">
//                       <p className="cart-item-total">
//                         {(item.price * item.quantity).toLocaleString()}₽
//                       </p>
//                       <button
//                         className="cart-remove-button"
//                         onClick={() => removeItem(item.id)}
//                       ></button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div>
//               <div className="cart-summary">
//                 <div className="cart-summary-header">
//                   <h2 className="cart-summary-title">Итого к оплате</h2>
//                 </div>
//                 <div className="cart-summary-content">
//                   <div className="cart-summary-row">
//                     <span>Товары ({getTotalItems()} шт.)</span>
//                     <span>{getTotalPrice().toLocaleString()}₽</span>
//                   </div>

//                   <div className="cart-summary-row">
//                     <span>Доставка</span>
//                     <span>Бесплатно</span>
//                   </div>

//                   <hr className="my-2 border-t" />

//                   <div className="cart-summary-row cart-total-row">
//                     <span>Общая сумма</span>
//                     <span>{getTotalPrice().toLocaleString()}₽</span>
//                   </div>

//                   <button className="cart-checkout-button" onClick={handleCheckOut}>
//                     Оформить заказ
//                   </button>

//                   <div className="cart-notice">
//                     При оформлении заказа вам придёт email с деталями заказа
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );

// }

import React from 'react';

export default function CartPage({
  cartItems,
  loading,
  error,
  updateQuantity,
  removeItem,
  handleCheckOut,
  getTotalPrice,
  getTotalItems,
}) {
  if (loading) return <div>Загрузка корзины...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div>
      <h1>Корзина</h1>
      <p>{cartItems.length > 0 ? `Товаров: ${getTotalItems()}` : 'Корзина пуста'}</p>

      {cartItems.length === 0 ? (
        <div>
          <h3>Корзина пуста</h3>
          <p>Добавьте понравившиеся дизайны носков в корзину</p>
        </div>
      ) : (
        <div>
          <div>
            {cartItems.map((item) => (
              <div key={item.id}>
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100px', height: '100px' }}
                  />
                </div>
                <div>
                  <h3>{item.name}</h3>
                  <p>
                    Цвет: {item.color} • Узор: {item.pattern}
                  </p>
                  <p>{item.price}₽</p>
                </div>

                <div>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>
                </div>

                <p>{item.price * item.quantity}₽</p>
                <button onClick={() => removeItem(item.id)}>Удалить</button>
              </div>
            ))}
          </div>

          <div>
            <h2>Итого к оплате</h2>
            <div>
              <p>
                Товары ({getTotalItems()} шт.) {getTotalPrice()}₽
              </p>
              <p>Доставка Бесплатно</p>
              <hr />
              <p>Общая сумма {getTotalPrice()}₽</p>
            </div>
            <button onClick={handleCheckOut}>Оформить заказ</button>
            <p>При оформлении заказа вам придёт email с деталями заказа</p>
          </div>
        </div>
      )}
    </div>
  );
}
