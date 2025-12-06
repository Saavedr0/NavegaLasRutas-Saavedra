import { useState } from "react";

function ItemCount({ initial = 1, stock = 10, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAdd = () => {
    onAdd(count);
    alert(`Agregaste ${count} unidad(es) al carrito`);
  };

  return (
    <div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <span style={{ margin: "0 10px" }}>{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={handleAdd} style={{ marginTop: "10px" }}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
