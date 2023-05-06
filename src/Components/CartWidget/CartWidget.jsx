import logo from "../img/cartWidget.png";
import cartWidget from "./cartWidget.css";
import { useContext } from "react";
import { cartContext } from "../../Context/cartContext.jsx"
import { Link } from "react-router-dom";



function CartWidget(props) {

  const {totalItems} = useContext(cartContext);

  return (
    <Link to="/cart">
    <div className="carrito">
      <img src={logo} className="carritoLogo" alt="carrito" />
      <img />
      { <figcaption className="numero"> {totalItems()} </figcaption> }
    </div>
    </Link>
  );
}

export default CartWidget;
