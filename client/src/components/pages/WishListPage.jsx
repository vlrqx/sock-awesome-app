import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WishlistPage.css';
import WishlistCard from '../ui/WishlistCard';
import axiosInstance from '../../api/axiosInstance';

export default function WishlistPage({ user, wishproduct, setWishproduct }) {
  const handleRemoveItem = (itemId) => {
    setWishproduct((prev) => prev.filter((item) => item.id !== itemId));
  };

  console.log(wishproduct)
  const handleAddToCart = (productId) => {
    console.log(`Товар ${productId} добавлен в корзину`);
  };
  return (
    <div className="wishlist-container">
      <h2>Мои избранные товары</h2>

      <div className="wishlist-grid">
        {wishproduct.map((item) => (
          <WishlistCard
            key={item.id}
            item={item}
            onRemove={handleRemoveItem}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
