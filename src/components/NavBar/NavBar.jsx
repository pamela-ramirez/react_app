import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router";

function NavBar() {
  return (
    <nav>
        <Link to="/"><span>miTienda.com</span></Link>
      <ul>
        <Link to="/category/woman">
          <li>Women's clothing</li>
        </Link>
        <Link to="/category/men">
          <li>Men's clothing</li>
        </Link>
        <Link to="/category/electronics">
          <li>Electronics</li>
        </Link>
        <Link to="/category/jewelery">
          <li>Jewelery</li>
        </Link>
      </ul>
        <div className="cart-container">
          <CartWidget />
        </div>
    </nav>
  );
}

export default NavBar;
