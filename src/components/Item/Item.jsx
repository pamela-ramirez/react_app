import { Link } from "react-router";
import "./Item.css"

function Item({ id, title, image, price }) {

  return (
    <div className="item-card">
      <h3 className="item-card-title">{title}</h3>
      <img className="item-card-img" src={image} alt={title} />
      <h3 className="item-card-price">Precio: $ {price}</h3>
      <div className="item-card-buttons">
        <Link to={`/detail/${id}`}>
          <button className="item-button">Ir a ver detalle</button>
        </Link>
      </div>
    </div>
  );
}

export default Item;
