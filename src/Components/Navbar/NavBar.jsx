import logo from '../img/laser.png'
import CartWidget from '../CartWidget/CartWidget';
import { Link }  from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function NavBar(props) {
    return(
        <nav>
                <div className='container'>   
                <ul>
                    <img src={logo} alt="Logo" className='animate__animated animate__flip' />
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/servicios">Servicios</Link> </li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/encontranos">Encontranos</Link></li>
                    <li><Link to="/cart"> <CartWidget/> </Link></li>
                </ul>        
                </div>

      </nav>
    )
    
}

export default NavBar;

