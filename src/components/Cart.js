import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) return <p>Carrito vacío</p>;

  return (
    <div>
      <h2>Carrito</h2>
      {cart.map(p => (
        <div key={p.id}>
          <h4>{p.titulo}</h4>
          <p>Cantidad: {p.quantity}</p>
          <p>${p.precio * p.quantity}</p>
          <button onClick={() => removeItem(p.id)}>Eliminar</button>
        </div>
      ))}
      <h3>Total: ${totalPrice}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
}

export default Cart;
