import logo from '../img/laser.png'
import CartWidget from '../CartWidget/CartWidget';
import { Link }  from 'react-router-dom';


function NavBar(props) {
    return(
        <nav>
                <div className='container'>   
                <ul>
                    <img src={logo} alt="Logo" className='animate__animated animate__flip' />
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="">Servicios</Link> </li>
                    <li><Link to="">Nosotros</Link></li>
                    <li><Link to="">Contacto</Link></li>
                    <li><Link to="">Productos</Link></li>
                    <li><Link to="">Encontranos</Link></li>
                    <li><CartWidget/></li> 
                </ul>        
                </div>

      </nav>
    )
    
}

export default NavBar;

