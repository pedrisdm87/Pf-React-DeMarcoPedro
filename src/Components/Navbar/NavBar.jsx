import logo from '../img/laser.png'
import CartWidget from '../CartWidget/CartWidget';


function NavBar(props) {
    return(
        <nav>
                <div>   
                <ul>
                    <img src={logo} alt="Logo" className='animate__animated animate__flip' />
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Servicios</a> </li>
                    <li><a href="">Nosotros</a></li>
                    <li><a href="">Contacto</a></li>
                    <li><a href="">Productos</a></li>
                    <li><a href="">Encontranos</a></li>
                    <li><CartWidget/></li> 
                </ul>        
                </div>

      </nav>
    )
    
}

export default NavBar;

