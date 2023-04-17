import React from 'react';

function ProductList(props) {
  return (
    <ul>
      {props.products.map((product) => (
        <li key={product.description}>
          <div>{product.productId} - {product.price} - {product.description}</div>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;