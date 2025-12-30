import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/category/electronica">Electrónica</Link>
      <Link to="/category/ropa">Ropa</Link>
      <Link to="/category/libros">Libros</Link>
      <Link to="/category/accesorios">Accesorios</Link>

      <CartWidget />
    </nav>
  );
}

export default NavBar;
