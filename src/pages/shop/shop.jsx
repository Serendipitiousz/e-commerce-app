import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext.jsx";
import { Product } from "./product.jsx";
import "./shop.css";

export const Shop = () => {
  const { products, searchTerm, setSearchTerm, selectedType, setSelectedType } =
    useContext(ShopContext);
  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesSelectedType =
      selectedType === "all" || product.category === selectedType;

    return matchesSearchTerm && matchesSelectedType;
  });

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1 className="text-2xl">HY E-shop</h1>
      </div>

      <div className="search-filter">
        <input
          className="search-bar"
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="search here..."
        />
        <select
          className="dropdown"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="all">All</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
        </select>
      </div>

      <div className="product-list">
        {filteredProducts.length > 0
          ? filteredProducts.map((product) => (
              <Product key={product.id} data={product} />
            ))
          : products.map((product) => (
              <Product key={product.id} data={product} />
            ))}
      </div>
    </div>
  );
};
