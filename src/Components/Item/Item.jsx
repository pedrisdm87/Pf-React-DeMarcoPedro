import "./item.css";
import { useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import imagenes from ""

function Item(props) {
  const [fav, setFav] = useState(false);

  function handleFavorite(evt) {
    evt.preventDefault()
    setFav(!fav);
  }

  let classNameFavorite;

  if (fav === true) {
    classNameFavorite = "item-card_favicon favorite";
  } else {
    classNameFavorite = "item-card_favicon";
  }

  return (
    <Link to={`/detalle/${props.detalle}`}>
      <div id={props.id} className="item-card">
        
        <div className="item-card_header">
          <h2>{props.detalle}</h2>
        </div>
        <div className="item-card_img">
          <img src={props.img} alt="imagen"></img>
        </div>

        <div className="item-card_detail">
          <h4>$ {props.precio}</h4>
          <small>{props.categoria}</small>
        </div>

        <Button>Ver detalle</Button>
      </div>
    </Link>
  );
}

export default Item;