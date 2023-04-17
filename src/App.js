import React, { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

const App = () => {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);

    // const storedProducts = JSON.parse(localStorage.getItem("products")) || {};
    // console.log(storedProducts)
    let obj = {
      price: newProduct.price,
      id: newProduct.productId,
      desc: newProduct.description,
    };

    localStorage.setItem(obj.desc, JSON.stringify(obj));
  };
  const totalAmount = products.reduce(
    (total, product) => total + parseInt(product.price),
    0
  );

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Ecommerce Website</h1>
      <ProductForm onAddProduct={handleAddProduct} />
      <h3>Total Value worth of Products: Rs {totalAmount}</h3>
      <h1>Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;
