import { useContext } from "react";
import cartContext from "../../context/CartContext";
import { createBuyOrder } from "../../data/fireStore";
import FormCheckout from "../FormCheckout/FormCheckout";
import "./CartContainer.css";
import { Link } from "react-router";

function CartContainer() {
  const { cart, clearCart, removeItem } = useContext(cartContext);

  async function handleCheckout(formData) {
    const buyOrder = {
      buyer: formData,
      cart: cart,
      total: 999,
      date: new Date(),
    };

    const orderDocument = await createBuyOrder(buyOrder);
    console.log(orderDocument);
    clearCart();
    alert(`Hiciste tu compra! - el ID de tu compra es ${orderDocument.id}`);
  }

  if (cart.length == 0) {
    return (
      <div>
        <h2>Tu carrito esta vacio.</h2>
        <Link to="/">
          <button>Volver al inicio</button>
        </Link>
      </div>
    );
  }

  return (
    <section>
      <h2>Tu carrito de compras</h2>
      <div className="cart-checkout-wrapper">
        <div className="cart-items">
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-img"
                />
                <div>
                  <h4>{item.title}</h4>
                  <p>Precio: ${item.price}</p>
                  <p>Cantidad: {item.count}</p>
                </div>
                <button onClick={() => removeItem(item.id)}>✖️</button>
              </li>
            ))}
          </ul>
          <button className="clear-cart" onClick={clearCart}>
            Vaciar carrito
          </button>
          <div className="cart-total">
            Total: ${cart.reduce((acc, i) => acc + i.price * i.count, 0)}
          </div>
        </div>
        <div className="checkout-form">
          <FormCheckout handleCheckout={handleCheckout} />
        </div>
      </div>
    </section>
  );
}

export default CartContainer;
