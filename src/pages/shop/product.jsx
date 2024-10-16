import React, { useContext } from 'react';
import './product.css';
import { ShopContext } from '../../context/shopContext.jsx';
import LazyLoad from 'react-lazyload';

export const Product = (props) => {
  const { addToCart, cartItem } = useContext(ShopContext);
  const { id, price, images, title } = props.data;

  const cartItemAmount = cartItem[id] || 0;

  return (
    <div className='product'>
       
          <img src={images[0]} alt={title} width='150px' height='100px' loading='lazy'/>
      
      
      <h3>{title}</h3>
      <p>${price}</p>
      <button className='add-cart' onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && `(${cartItemAmount})`}
      </button>
    </div>
  );
};
