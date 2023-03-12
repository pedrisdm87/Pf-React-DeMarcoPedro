import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import itemListContainer from './Components/ItemListContainer/itemListContainer.css';
import navBar from './Components/Navbar/navBar.css';
/* Importar navbar y link container */



function App() {
  return (
    <div>
      <header>
        
        <NavBar></NavBar>
        <ItemListContainer titulo = "Aqui iran las cards"></ItemListContainer>

        {/* Link navbar (con logo li-s y carrito con numero hC) y link item list container */}

      </header>

    </div>
  )

}

export default App;
