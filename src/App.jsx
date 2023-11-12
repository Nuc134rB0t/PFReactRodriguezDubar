// * Main app

import './assets/styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
          <NavBar />
          <main className='main__bg container-fluid'>
            {/*  <ItemListContainer
          greeting='Cargando items...'
          suggestion='Por favor, espere.'
        /> */}

            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/categoria/:idCategoria' element={<ItemListContainer />}/>
              <Route path='/item/:idItem' element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<h2 className="alert alert-danger">404 - vuelva al Inicio</h2>} />
            </Routes>
          </main>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
