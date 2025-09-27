import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Hola, bienvenidos a mi Tienda"></ItemListContainer>}/>
          <Route path="/category/:catParam" element={<ItemListContainer greeting="Categoria"/>}/>
          <Route path="/detail/:idParam" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<p>Ups ! no encontramos lo que estas buscando</p>}/>
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
