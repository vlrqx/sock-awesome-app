import React from 'react';
import './WishlistCard.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const WishlistCard = ({ item, onRemove, onAddToCart }) => {
  const { pattern, img, color } = item.fav || {};
  const { userId, designSockId } = item;

  const handleRemove = (itemId) => {
    axios
      .delete(`/api/favorite/item/${itemId}`)
      .then(() => {
        onRemove(itemId);
        toast.success('Товар удален из избранного');
      })
      .catch((error) => console.error('Ошибка удаления:', error));
  };

  const handleAddToCart = async () => {
    try {
      const response = await axios.post('/api/cart/', {
        userId,
        designSockId,
      });

      if (onAddToCart) onAddToCart(designSockId);
      toast.success('Товар успешно добавлен в корзину!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error('Ошибка при добавлении в корзину:', {
        status: error.response?.status,
        message: error.response?.data?.message || error.message,
      });
      toast.error('Не удалось добавить товар в корзину', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
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
