import React from "react";

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

function productList() {
  const listItems = products.map((item) => {
    return (
      <li key={item.id} style={{ color: item.isFruit ? "green" : "red" }}>
        {item.title}
      </li>
    );
  });
  return <ul>{listItems}</ul>;
}

export default productList;
