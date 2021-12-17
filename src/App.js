import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';

function App() {

  return (
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
  );
}

export default App;

