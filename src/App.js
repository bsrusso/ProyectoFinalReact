import 'bootstrap/dist/css/bootstrap.min.css'; //Necesario para traer los estilos de bootstrap
import 'bootstrap'; //Necesario para que el boton del menu se abra en dispositivos medianos/pequeños
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';


function App() {
  return (
    <div id="app">
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/ProyectoFinalReact" element={<ItemListContainer />} /> //added only to deploy in github pages
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:categoryID" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
