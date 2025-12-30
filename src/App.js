import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a mi tienda!" />} />

        <Route path="/category/:categoryId" element={<ItemListContainer greeting="¡Bienvenido a mi tienda!" />} />

        <Route path="/product/:productId" element={<ItemDetailContainer />} />

        <Route path="*" element={<NotFound />} />

        <Route path="/checkout" element={<CheckoutForm />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
