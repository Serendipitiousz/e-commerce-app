import React, { createContext, useState, useEffect,useCallback } from 'react';
import axios from 'axios';

const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [selectedType, setSelectedType] = useState('all');
  const [loading, setLoading] = useState(true);

  const getDefaultCart = (products) => {
    let cart = {};
    products.forEach((product) => {
      cart[product.id] = 0;
    });
    return cart;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        const fetchedProducts = response.data.products.map(product => ({
          id: product.id,
          images: product.images,
          category: product.category,
          price: product.price,
          title: product.title,
        }));
  
        setProducts(fetchedProducts);
        setCartItem(getDefaultCart(fetchedProducts)); 
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
  
    fetchProducts(); 
  }, []);
  

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        const itemInfo = products.find((product) => product.id === Number(item));
        totalAmount += cartItem[item] * itemInfo.price;
      }
    }
    return totalAmount.toFixed(2); 
  };

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  return (
    <ShopContext.Provider value={{ products, getTotalCartAmount, addToCart, cartItem, removeFromCart, updateCartItemCount, searchTerm, setSearchTerm, selectedType, setSelectedType }}>
      {children}
    </ShopContext.Provider>
  );
};

export { ShopContext };
