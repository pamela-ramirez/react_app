import { Link } from "react-router";
import "./Item.css"

function Item({ id, title, image, price }) {
  return (
    <div className="item-card">
      <h2 className="item-title">{title}</h2>
      <img className="item-image" src={image} alt={title} />
      <h3 className="item-price">Precio: $ {price}</h3>
      <div className="item-button-container">
        <Link to={`/detail/${id}`}>
          <button className="item-button">Ir a ver detalle</button>
        </Link>
      </div>
    </div>
  );
}

export default Item;
