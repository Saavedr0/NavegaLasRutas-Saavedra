import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemCount from "./ItemCount"; 


const products = [
  { id: "1", name: "Producto 1", description: "Descripción del producto 1" },
  { id: "2", name: "Producto 2", description: "Descripción del producto 2" },
];

function ItemDetailContainer() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {

    new Promise((resolve) => {
      setTimeout(() => {
        const prod = products.find(p => p.id === productId);
        resolve(prod);
      }, 500);
    }).then((data) => setProduct(data));
  }, [productId]);

  if (!product) return <p>Cargando producto...</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <ItemCount />
    </div>
  );
}

export default ItemDetailContainer;
