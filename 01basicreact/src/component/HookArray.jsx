import React, { useState } from "react";

function HookArray() {
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([
      ...items,
      {
        value: Math.floor(Math.random() * 10),
      },
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>Display Random Num</button>
      <ul>
        {items.map((item) => (
          <li key={item.value}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}
export default HookArray;
