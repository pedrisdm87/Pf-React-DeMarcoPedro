import React, { useState, useEffect } from "react";
import Flex from "../Flex/Flex";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";
import Categorias from "../Categorias/Categorias";
import Loader from "../Loader/Loader";
import { getItems, getItemsByCategory } from "../services/firestore";




//-------------------------------------------------------------//
function ItemListContainer() {
  const [products, setProducts] = useState([]);

  const { categoria } = useParams();


  useEffect(() => {
    if (categoria === undefined) {
      
      getItems().then((respuesta) => {
        setProducts(respuesta);
      });
    } else {
      getItemsByCategory(categoria).then((respuesta) => 
       setProducts(respuesta));
    }
  }, [categoria]);

  if(products.length === 0){
    return <Loader/>;
  }

  return (
    <>
      <Categorias />
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
        ))}
        ;
      </Flex>
    </>
  );
}

export default ItemListContainer;
