import products from "../../data/products";
import Item from "../Item/Item";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ItemListContainer.css";
import { getProducts, getProductsByCategory } from "../../data/fireStore";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const { catParam } = useParams();

  useEffect(() => {
    if (catParam) {
      {
        getProductsByCategory(catParam).then((productList) => {
          console.log("Promesa terminada");
          setProducts(productList);
        });
      }
    } else {
      getProducts()
        .then((productList) => {
          console.log("Promesa terminada");
          setProducts(productList);
        })
        .catch((error) => {
          console.log("Error solicitando los datos", error);
        })
        .finally(() => {
          console.log("Esto se ejecuta siempre");
        });
    }
  }, [catParam]);

  return (
    <div className="item-list-container">
      <h2>{props.greeting}</h2>

      {products.length === 0 ? (
        <p className="item-list-container__loading">Cargando...</p>
      ) : (
        <div>
          <h4>Nuestros Productos</h4>
          <div className="item-grid">
            {products.map((item) => (
              <Item {...item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;
