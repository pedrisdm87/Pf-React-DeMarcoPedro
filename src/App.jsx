import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import itemListContainer from './Components/ItemListContainer/itemListContainer.css';
import navBar from './Components/Navbar/navBar.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element= { <itemListContainer/>}/>
       
      
      {/* <header>
        
        
        <ItemListContainer titulo = "Sitio en construcción..."></ItemListContainer>

        

      </header> */}

      </Routes>
    </BrowserRouter>
  )

}

export default App;
