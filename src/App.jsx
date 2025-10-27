import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router";
import { CartContextProvider } from "./context/CartContext";
import CartContainer from "./components/CartContainer/CartContainer";
import { getProducts } from "./data/fireStore";
//import { exportProductsToFireStore } from "./data/fireStore";

function App() {
  getProducts();
  return (

    <CartContextProvider>
      <BrowserRouter>
        <main className="container">
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Hola, bienvenidos a mi Tienda"></ItemListContainer>}/>
            <Route path="/category/:catParam" element={<ItemListContainer greeting="Categoria"/>}/>
            <Route path="/detail/:idParam" element={<ItemDetailContainer/>}/>
            <Route path="*" element={<p>Ups ! no encontramos lo que estas buscando</p>}/>
            <Route path="/cart" element={<CartContainer/>}></Route>
          </Routes> 
        </main>
      </BrowserRouter>
      </CartContextProvider>

  );
}

export default App;
