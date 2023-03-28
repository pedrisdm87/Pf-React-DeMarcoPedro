import React, { useState, useEffect} from "react";
import Flex from "../Flex/Flex";
import Item from "../Item/Item";
import products from "../data/productos"
import { useParams } from "react-router-dom";


function getItems() {
  const promesa = new Promise((resolve)=>{
        setTimeout(()=>{
        resolve(products)
    }, 1000);
  });
  return promesa;  
}

function ItemListContainer() {

  
  const [products, setProducts] = useState([]);

console.log(useParams());

  useEffect(
    ()=>{
      getItems().then((respuesta) =>{
        setProducts(respuesta);
    });
  },
  []
)
  
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
            id={producto.id}
          />
        ))};
      </Flex>
  );
}

export default ItemListContainer; 