import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, clearCart, getTotalPrice } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h2>Tu carrito está vacío</h2>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Carrito</h2>

      {cart.map((prod) => (
        <div key={prod.id}>
          <h3>{prod.title}</h3>
          <p>Cantidad: {prod.quantity}</p>
          <p>Precio unitario: ${prod.price}</p>
          <p>Subtotal: ${prod.price * prod.quantity}</p>

          <button onClick={() => removeItem(prod.id)}>
            Eliminar producto
          </button>
        </div>
      ))}

      <h3>Total: ${getTotalPrice()}</h3>

      <button onClick={clearCart}>Vaciar carrito</button>

      <div>
        <Link to="/checkout">Finalizar compra</Link>
      </div>
    </div>
  );
};

export default Cart;
