import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import { CartContextProvider } from './context/CartContext';

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/category/:cateProd" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<CartWidget />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

