import React, { useContext } from 'react';
import { ShopContext } from '../../context/shopContext.jsx';
import { CartItem } from './cart-item.jsx';
import './cart.css';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { products, cartItem, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cart-items'>
       
        {products.map((product) => {
          if (cartItem[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
          return null; 
        })}
      </div>

      {totalAmount > 0 ? (
        <div className='checkout'>
          <p className='subtotal'>Subtotal: ${totalAmount}</p>
          <div className='btn-div'>
            <button className='continue-btn' onClick={() => navigate('/')}>Continue Shopping</button>
            <button className='checkout-btn'>Checkout</button>
          </div>
        </div>
      ) : (
        <h1>Your Cart is empty</h1>
      )}
    </div>
  );
};
