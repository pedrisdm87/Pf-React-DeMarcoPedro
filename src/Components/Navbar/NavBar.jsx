import logo from '../img/laser.png'
import CartWidget from '../CartWidget/CartWidget';
import { Link }  from 'react-router-dom';


function NavBar(props) {
    return(
        <nav>
                <div className='container'>   
                <ul>
                    <img src={logo} alt="Logo" className='animate__animated animate__flip' />
                    <li><link to="/">Inicio</link></li>
                    <li><link to="">Servicios</link> </li>
                    <li><link to="">Nosotros</link></li>
                    <li><link to="">Contacto</link></li>
                    <li><link to="">Productos</link></li>
                    <li><link to="">Encontranos</link></li>
                    <li><CartWidget/></li> 
                </ul>        
                </div>

      </nav>
    )
    
}

export default NavBar;

