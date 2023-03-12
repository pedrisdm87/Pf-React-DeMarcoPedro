import logo from '../img/laser.png'
import CartWidget from '../CartWidget/CartWidget';


function NavBar(props) {
    return(
        <nav>
                <div className="barraLogo">   
                    <img src={logo} alt="Logo" className='animate__animated animate__flip' />
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="pages/servicios1.html" className="selected">Servicios</a> </li>
                    <li><a href="pages/nosotros.html"className="selected" >Nosotros</a></li>
                    <li><a href="pages/contacto1.html" className="selected">Contacto</a></li>
                    <li><a href="pages/productos.html" className="selected">Productos</a></li>
                    <li><a href="pages/encontranos.html" className="selected">Encontranos</a></li>
                </ul>        
                </div>
{/*                 <CartWidget/>                
 */}   
      </nav>
    )
    
}

export default NavBar;

