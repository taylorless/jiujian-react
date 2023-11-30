import React from "react";
import { useState } from "react";

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

function ProductList() {
  const [score, setScore] = useState(0);
  function increment() {
    setScore(score + 1);
  }
  const listItems = products.map((item) => {
    return (
      <li key={item.id} style={{ color: item.isFruit ? "green" : "red" }}>
        {item.title}
      </li>
    );
  });
  return (
    <div>
      <h2>函数组件-无状态组件-使用useState</h2>
      <ul>{listItems}</ul>
      <h1>{score}</h1>
      <button onClick={increment}>增加</button>
      <button onClick={() => increment()}>增加</button>
    </div>
  );
}

export default ProductList;
