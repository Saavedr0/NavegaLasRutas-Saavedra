import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


const products = [
  { id: "1", name: "Auriculares", category: "electronica", price: 100 },
  { id: "2", name: "Laptop", category: "electronica", price: 1200 },
  { id: "3", name: "Smartphone", category: "electronica", price: 800 },
  { id: "4", name: "Mouse", category: "electronica", price: 40 },
  { id: "5", name: "Teclado", category: "electronica", price: 60 },
  { id: "6", name: "Remera", category: "ropa", price: 50 },
  { id: "7", name: "Pantalón", category: "ropa", price: 80 },
  { id: "8", name: "Zapatillas", category: "ropa", price: 120 },
  { id: "9", name: "Campera", category: "ropa", price: 150 },
  { id: "10", name: "Gorra", category: "ropa", price: 25 },
  { id: "11", name: "Libro: React Básico", category: "libros", price: 30 },
  { id: "12", name: "Libro: JavaScript Avanzado", category: "libros", price: 45 },
  { id: "13", name: "Cuaderno", category: "libros", price: 10 },
  { id: "14", name: "Mochila", category: "accesorios", price: 70 },
  { id: "15", name: "Reloj", category: "accesorios", price: 200 },
  { id: "16", name: "Pulsera", category: "accesorios", price: 35 },
];

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(
            products.filter(
              (p) => p.category.toLowerCase() === categoryId.toLowerCase()
            )
          );
        } else {
          resolve(products);
        }
      }, 500);
    }).then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div>
      <h2>{greeting}</h2>
      {categoryId && <h3>Categoría: {categoryId}</h3>}
      <ul>
        {items.map((product) => (
          <li key={product.id} style={{ marginBottom: "15px" }}>
            <Link to={`/product/${product.id}`}>
              <strong>{product.name}</strong>
            </Link>
            <p>Precio: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;
