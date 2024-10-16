import React, { useContext } from 'react';
import { ShopContext } from '../../context/shopContext.jsx';
import './cart-item.css';

export const CartItem = (props) => {
  const { id, title, price, images } = props.data; 
  const { addToCart, cartItem, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className='cartItem'>
     
          
      <img src={images[0]} alt={title} width='150px' height='100px' loading="lazy" />
    
      <div className='description'>
        <p>{title}</p>
        <p>${price}</p>
      </div>
      <div className='count-handler'>
        <button className='plus-btn' onClick={() => addToCart(id)}>+</button>
        <input
          type="text"
          className='quantity-input'
          value={cartItem[id]} 
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)} 
        />
        <button className='minus-btn' onClick={() => removeFromCart(id)}>-</button>
      </div>
    </div>
  );
};
