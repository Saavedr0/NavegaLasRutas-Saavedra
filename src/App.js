import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Ruta principal: todos los productos */}
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a mi tienda!" />} />

        {/* Ruta por categoría */}
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="¡Bienvenido a mi tienda!" />} />

        {/* Ruta de detalle de producto */}
        <Route path="/product/:productId" element={<ItemDetailContainer />} />

        {/* Ruta 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
