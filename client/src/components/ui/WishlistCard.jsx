import React from 'react';
import './WishlistCard.css';
import axios from 'axios';

const WishlistCard = ({ item, onRemove, onAddToCart, userId, designSockId }) => {
  const { pattern, img, color } = item.fav || {};

  console.log(userId)
  const handleRemove = (itemId) => {
    axios
      .delete(`/api/favorite/item/${itemId}`)
      .then(() => {
        onRemove(itemId);
      })
      .catch((error) => console.error('Ошибка удаления:', error));
  };

  const handleAddToCart = async () => {
    try {
      const response = await axios.post('/api/cart/', {
        userId,
        designSockId,
      });
      console.log('Отправляемый designSockId:', designSockId);
      console.log('Отправляемый userId:', designSockId);

      console.log('Товар добавлен в корзину:', response.data);
      if (onAddToCart) onAddToCart(designSockId);
    } catch (error) {
      console.error('Ошибка при добавлении в корзину:', {
        status: error.response?.status,
        message: error.response?.data?.message || error.message,
      });
    }
  };

  return (
    <div className="wishlist-card">
      <button className="close-btn" onClick={() => handleRemove(item.id)}>
        ×
      </button>

      <div className="card-image-container">
        {img && (
          <img
            src={`/images/${img}`}
            alt={`Носки с узором ${pattern}`}
            className="card-image"
          />
        )}
      </div>

      <div className="card-details">
        <div className="card-attributes">
          {pattern && <div className="card-pattern">Узор: {pattern}</div>}
          {color && (
            <div className="card-color">
              <span>Цвет: </span>
              <div
                className="color-swatch"
                style={{ backgroundColor: color.toLowerCase() }}
                title={color}
              />
              <span className="color-name">{color}</span>
            </div>
          )}
        </div>

        <div className="card-actions">
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
