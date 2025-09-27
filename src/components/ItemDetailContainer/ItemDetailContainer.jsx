import { Link, useParams } from "react-router";
import { getProductById } from "../../data/mockApi";
import { useEffect, useState } from "react";

export default function ItemDetailContainer() {
  const { idParam } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getProductById(idParam).then((res) => setItem(res));
  }, []);

  return (
    <>
      {item ? (
        <div>
          <h2>{item.title}</h2>
          <img height="100" src={item.image} />
          <h3>Precio: ${item.price}</h3>
          <p>{item.description}</p>
          <button>Comprar</button>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
}
