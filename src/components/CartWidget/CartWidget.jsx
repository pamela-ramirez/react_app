import {ShoppingCart } from "lucide-react";
import "./CartWidget.css";
import { useContext } from "react";
import cartContext from "../../context/CartContext";
import {Link} from "react-router"


function CartWidget() {
  const { countItems } = useContext(cartContext);

  return (
    <Link to="/cart">
      <ShoppingCart className="cart-widget"></ShoppingCart>
      <span>{countItems()}</span>
    </Link>
  );
}

export default CartWidget;
