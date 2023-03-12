/* import "./cartWidget.css" */
import logo2 from '../img/cartWidget.png'

function CartWidget(props){
    return(
          <div className= "carrito">
            <img src={logo2} alt="carrito" /><img/>
            <figcaption className="numero"> 1 </figcaption>
          </div>

    )
}

export default CartWidget;