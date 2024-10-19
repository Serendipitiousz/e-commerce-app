import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext.jsx";
import "./cart-item.css";

export const CartItem = (props) => {
  const { id, title, price, images } = props.data;
  const { addToCart, cartItem, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  const handleChange = (e) => {
    const value = e.target.value;

    if (value === "" || /^[0-9\b]+$/.test(value)) {
      const quantity = value === "" ? 1 : Math.max(1, Number(value));
      updateCartItemCount(quantity, id);
    }
  };

  const handleRemove = () => {
    updateCartItemCount(0, id);
  };

  return (
    <div className="cartItem">
      <img
        src={images[0]}
        alt={title}
        width="150px"
        height="100px"
        loading="lazy"
      />

      <div className="description">
        <p>{title}</p>
        <p>${price}</p>
      </div>
      <div className="count-handler">
        <button className="plus-btn" onClick={() => addToCart(id)}>
          +
        </button>
        <input
          type="text"
          className="quantity-input"
          value={cartItem[id] || 1}
          onChange={handleChange}
        />
        <button
          className="minus-btn"
          onClick={() => {
            if (cartItem[id] > 1) {
              removeFromCart(id);
            }
          }}
        >
          -
        </button>

        <button className="remove-btn" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};
