import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import itemListContainer from './Components/ItemListContainer/itemListContainer.css';
import navBar from './Components/Navbar/navBar.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Components/Inicio/Inicio';
import CartContainer from './Components/CartContainer/CartContainer';
import { CartProvider } from './Context/cartContext';




function App() {




  return (
    <CartProvider>
    <BrowserRouter>
    <NavBar/>
    
          <Routes>
            
            <Route path="/" element= {<Inicio/>} />
            <Route path="/Productos" element= { <ItemListContainer/>}/>
            <Route path='/detalle/:id' element={<ItemDetailContainer />} />
            <Route path="/category/:categoryid" element = {<ItemListContainer/>}/>
            <Route path="/cart" element = {<CartContainer/>}/>
      </Routes>
      
    </BrowserRouter>
    </CartProvider>
  )

}

export default App;
