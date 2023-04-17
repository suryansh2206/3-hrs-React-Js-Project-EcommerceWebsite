import React, { useState } from "react";

const ProductForm = (props) => {
  const [productId, setProductId] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productId && price && description) {
      const product = {
        productId,
        price,
        description,
      };
      props.onAddProduct(product);
      setProductId("");
      setPrice("");
      setDescription("");
    } else {
      alert("Please fill in all details");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="productId">Product ID:</label>
        <input
          type="text"
          id="productId"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
