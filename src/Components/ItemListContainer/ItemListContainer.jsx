import React, { useState, useEffect } from "react";
import Flex from "../Flex/Flex";
import Item from "../Item/Item";
import imagenes from "../img/imagenes";
import products from "../data/productos"

function getItems() {
  const promesa = new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(products)
    }, 2500);
  });
  return promesa;  
}

function ItemListContainer() {

  const [products, setProducts] = useState([])

  getItems().then((respuesta) =>{
    setProducts(respuesta)
});
  
  return (    
      <Flex>
        {products.map((producto) => (
          <Item
            key={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            detalle={producto.detalle}
            imagen={producto.imagen}
            categoria={producto.categoria}
          />
        ))};
      </Flex>
  );
}

export default ItemListContainer;