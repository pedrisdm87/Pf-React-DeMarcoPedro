import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import itemListContainer from './Components/ItemListContainer/itemListContainer.css';
import navBar from './Components/Navbar/navBar.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
      
            <Route path="/" element= {<p>Aca deberia ir el componente HOME</p>} />
            <Route path="/Productos" element= { <ItemListContainer/>}/>
            <Route path="/productos/:id" element={ <ItemDetailContainer/> } />

      </Routes>
    </BrowserRouter>
  )

}

export default App;
