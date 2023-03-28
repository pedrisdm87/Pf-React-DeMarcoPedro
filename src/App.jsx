import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import itemListContainer from './Components/ItemListContainer/itemListContainer.css';
import navBar from './Components/Navbar/navBar.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categorias from './Components/Categorias/Categorias';


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Categorias/>
          <Routes>
            
            <Route path="/" element= {<p>Aca deberia ir el componente HOME</p>} />
            <Route path="/Productos" element= { <ItemListContainer/>}/>
            <Route path='/detalle/:id' element={<ItemDetailContainer />} />
            <Route path="/Categoria/:categoria" element = {<ItemListContainer/>}/>
      </Routes>
      
    </BrowserRouter>
  )

}

export default App;
