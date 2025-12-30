import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase";

function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  const handleSubmit = () => {
    const order = {
      items: cart,
      total: totalPrice,
      date: new Date()
    };

    addDoc(collection(db, "orders"), order).then(res => {
      setOrderId(res.id);
      clearCart();
    });
  };

  if (orderId) return <h2>Compra realizada. ID: {orderId}</h2>;

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handleSubmit}>Confirmar compra</button>
    </div>
  );
}

export default CheckoutForm;

