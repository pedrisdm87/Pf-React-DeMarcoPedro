import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import itemListContainer from './Components/ItemListContainer/itemListContainer.css';
import navBar from './Components/Navbar/navBar.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Components/Inicio/Inicio';
import CartContainer from './Components/CartContainer/CartContainer';
import { CartProvider } from './Context/cartContext';
import Servicios from './Components/Servicios/Servicios';
import Nosotros from './Components/Nosotros/Nosotros';
import { exportData } from './Components/services/firestore';



function App() {


  return (
    <>
    <CartProvider>
    <BrowserRouter>
    <NavBar/>
    
          <Routes>
            <Route path="/" element= {<Inicio/>} />
            <Route path="/Servicios" element= {<Servicios/>} />
            <Route path="/Nosotros" element= {<Nosotros/>} />
            <Route path="/Productos" element= { <ItemListContainer/>}/>
            <Route path='/detalle/:id' element={<ItemDetailContainer />} />
            <Route path="/category/:categoryid" element = {<ItemListContainer/>}/>
            <Route path="/cart" element = {<CartContainer/>}/>
      </Routes>
      
    </BrowserRouter>
    </CartProvider>
    </>
  )

}

export default App;
