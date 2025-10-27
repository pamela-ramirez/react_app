import { Link, useParams } from "react-router";
import { getProductById } from "../../data/fireStore";
import { useEffect, useState } from "react";
import { useContext } from "react";
import cartContext from "../../context/CartContext";
import "./ItemDetailContainer.css";

export default function ItemDetailContainer() {
  const { idParam } = useParams();
  const [item, setItem] = useState(null);
  const { addToCart } = useContext(cartContext);

  useEffect(() => {
    getProductById(idParam).then((res) => setItem(res));
  }, []);

  return (
    <div className="item-detail">
      {item ? (
        <div>
          <h2 className="item-detail-title">{item.title}</h2>
          <div className="item-detail-content">
            <img
              className="item-detail-img"
              src={item.image}
              alt={item.title}
            />
            <div>
              <p className="item-detail-description">{item.description}</p>
              <h3 className="item-detail-price">Precio: ${item.price}</h3>
              <button onClick={() => addToCart(item)}>
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
