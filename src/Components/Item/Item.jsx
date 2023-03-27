import "./item.css";
import { useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import imagenes from "../img/imagenes"
  

export default function Item(props) {

  return (
    
      <div id={props.id} className="item-card">
        
        <div className="item-card_header">
          <h2>{props.detalle}</h2>
        </div>
        <div className="item-card_img">
          <img src={props.imagen} alt="imagen"></img>
        </div>

        <div className="item-card_detail">
          <h4>$ {props.precio}</h4>
          <small>{props.categoria}</small>
        </div>
        <Link to={`/detalle/${props.id}`}>
        <Button>Ver detalle</Button>
        </Link>  
      </div>
    
  );
}

