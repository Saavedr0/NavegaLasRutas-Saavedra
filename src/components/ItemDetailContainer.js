import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import ItemCount from "./ItemCount";

function ItemDetailContainer() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const productRef = doc(db, "products", productId);

    getDoc(productRef).then((resp) => {
      if (resp.exists()) {
        setProduct({ id: resp.id, ...resp.data() });
      }
    });
  }, [productId]);

  const handleAdd = (quantity) => {
    console.log("Cantidad agregada:", quantity);
    setAdded(true);
  };

  if (!product) return <p>Cargando producto...</p>;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>

      {!added ? (
        <ItemCount stock={product.stock} onAdd={handleAdd} />
      ) : (
        <p>Producto agregado al carrito</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;