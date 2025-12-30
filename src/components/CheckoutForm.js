import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebase";

const CheckoutForm = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      buyer,
      items: cart.map((prod) => ({
        id: prod.id,
        title: prod.title,
        price: prod.price,
        quantity: prod.quantity,
      })),
      total: getTotalPrice(),
      date: serverTimestamp(),
    };

    const ordersRef = collection(db, "orders");

    addDoc(ordersRef, order).then((doc) => {
      setOrderId(doc.id);
      clearCart();
    });
  };

  if (orderId) {
    return (
      <div>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es:</p>
        <strong>{orderId}</strong>
      </div>
    );
  }

  return (
    <div>
      <h2>Finalizar compra</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={buyer.name}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={buyer.email}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={cart.length === 0}>
          Confirmar compra
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
