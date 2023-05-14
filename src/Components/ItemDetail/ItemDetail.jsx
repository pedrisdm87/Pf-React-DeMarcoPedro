import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { cartContext } from "../../Context/cartContext";
import { Link } from "react-router-dom";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Button from "../Button/Button";

function ItemDetail(props) {
  const { addItem, getCountInCart } = useContext(cartContext);

  const [addedToCart, setAddedToCart] = useState(false);

  function onAddToCart(count) {
    setAddedToCart(count);

    addItem(props, count);
  }
  const countInCart = getCountInCart(props.id);
  console.log(countInCart);

  return (
    <div className="detalle">
      <img src={props.imagen} />
      <h1>{props.nombre}</h1>
      <h2>{props.category}</h2>
      <h3>{props.descripcion}</h3>
      <p>Precio:$ {props.precio}</p>
      <ItemCount onAddToCart={onAddToCart} cantidad={props.cantidad} />
      <Link to="/products">
        <Button>Volver</Button>
      </Link>
    </div>
  );
}

export default ItemDetail;
