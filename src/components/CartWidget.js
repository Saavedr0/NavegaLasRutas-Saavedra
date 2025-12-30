import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  const total = getTotalQuantity();

  if (total === 0) return null;

  return (
    <Link to="/cart">
      🛒 {total}
    </Link>
  );
};

export default CartWidget;
