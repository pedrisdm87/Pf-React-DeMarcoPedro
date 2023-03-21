import logo from "../img/cartWidget.png"
import cartWidget from "./cartWidget.css"

function CartWidget(props){
    return(
          <div className="carrito">
            <img src={logo} className="carritoLogo" alt="carrito" /> <p>1</p><img/>
            {/* <figcaption className="numero"> 1 </figcaption> */}
          </div>

    )
}

export default CartWidget;