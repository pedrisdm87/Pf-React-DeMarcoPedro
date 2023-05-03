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


function getSingleItem(idURL) {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const encontrado = products.find((item) => {
        return item.id === Number(idURL);
      });
      resolve(encontrado);
    }, 1000);
  });

  return promesa;
}

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
    <div className="detalle">
      <img src={product.imagen} />
      <h1>{product.nombre}</h1>
      <h2>{product.categoria}</h2>
      <h3>{product.descripcion}</h3>
      <p>Precio:$ {product.precio}</p>
      <ItemCount cantidad={product.cantidad}/>
      <Link to="/Productos" element={<ItemListContainer />}>
        {" "}
        <Button>Volver</Button>{" "}
      </Link>
    </div>
  );
}

export default ItemDetailContainer;
