import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import itemListContainer from './Components/ItemListContainer/itemListContainer.css';
import navBar from './Components/Navbar/navBar.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Components/Inicio/Inicio';
import CartContainer from './Components/CartContainer/CartContainer';



import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfnaANbgvEOOvHkbsdhnVhLrfkBhHvXLE",
  authDomain: "pf-react-demarco.firebaseapp.com",
  projectId: "pf-react-demarco",
  storageBucket: "pf-react-demarco.appspot.com",
  messagingSenderId: "483455549687",
  appId: "1:483455549687:web:dd5c4c8d956e844a1553f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




function App() {




  return (
    <BrowserRouter>
    <NavBar/>
    
          <Routes>
            
            <Route path="/" element= {<Inicio/>} />
            <Route path="/Productos" element= { <ItemListContainer/>}/>
            <Route path='/detalle/:id' element={<ItemDetailContainer />} />
            <Route path="/Categoria/:categoria" element = {<ItemListContainer/>}/>
            <Route path="/Cart" element = {<CartContainer/>}/>
      </Routes>
      
    </BrowserRouter>
  )

}

export default App;
