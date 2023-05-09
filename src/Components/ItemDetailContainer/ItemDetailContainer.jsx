import React, { useState, useEffect } from "react";
import Flex from "../Flex/Flex";
import Item from "../Item/Item";
import products from "../data/productos";
import { useParams, Route, Link } from "react-router-dom";
import Button from "../Button/Button";
import "./itemDetailContainer.css";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Loader from "../Loader/Loader";
import ItemCount from "../ItemCount/ItemCount";
import { getSingleItem } from "../services/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";



function ItemDetailContainer(params) {
  const [product, setProduct] = useState([]);

  let { id } = useParams();
  

  useEffect(() => {
    getSingleItem(id).then((respuesta) => {
      setProduct(respuesta);
    });
  }, [id]);
  
  if(product.length === 0){
    
    return <Loader/>}

  return (
    <div>
    <Flex>
    <ItemDetail
    key={product.id}
    nombre={product.nombre}
    precio={product.precio}
    category={product.category}
    descripcion={product.descripcion}
    cantidad={product.cantidad}
    imagen ={product.imagen}/>

</Flex>
</div>
  );
}

export default ItemDetailContainer;
