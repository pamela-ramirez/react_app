import { createContext, useState } from "react";

const cartContext = createContext(null);

//custom Provider
export function CartContextProvider(props) {
  const [cartItems, setCarItems] = useState([]);
  console.log("Cart Items:", cartItems);

  function addToCart(newItem) {
    const newCart = structuredClone(cartItems);
    const existItemInCart = newCart.some((item) => item.id == newItem.id);
    if (existItemInCart) {
      //actualizar cant de unidades compradas
      const index = newCart.findIndex((item) => item.id == newItem.id);
      const updateItem = newCart[index];
      updateItem.count++;
    } else {
      newItem.count = 1;
      newCart.push(newItem);
    }

    setCarItems(newCart);
  }

  function countItems() {
    let quantity = 0;
    cartItems.forEach((item) => (quantity += item.count));
    return quantity;
  }

  function removeItem(idDelete) {
    const newCart = structuredClone(cartItems);
    const newCartWhitDeletes = newCart.filter((item) => item.id !== idDelete);
    setCarItems(newCartWhitDeletes);
  }

  function clearCart() {
    setCarItems([]);
  }

  return (
    <cartContext.Provider value={{ cart: cartItems, addToCart, countItems,removeItem, clearCart }}>
      {props.children}
    </cartContext.Provider>
  );
}

export default cartContext;
