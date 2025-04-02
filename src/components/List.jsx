import React, { useState } from "react";

function List() {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(1);

  function addProduct() {
    const productName = "Product" + count;
    setProduct((preState) => {
      return [...preState, productName];
    });
    setCount((preState) => {
      return preState + 1;
    });
  }
  console.log("current state: " + product);

  return (
    <>
      <h1>List</h1>
      <button onClick={addProduct}>Add Product</button>
      <ul>
        {product.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </>
  );
}

export default List;
