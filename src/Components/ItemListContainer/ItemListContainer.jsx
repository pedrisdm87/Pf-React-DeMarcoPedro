import React, { useState, useEffect } from "react";
import Flex from "../Flex/Flex";
import Item from "../Item/Item";
import products from "../data/productos";
import { useParams } from "react-router-dom";
import Categorias from "../Categorias/Categorias";
import Loader from "../Loader/Loader";

function getItems() {
  const promesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
  return promesa;
}

function getItemsByCategory(categoria) {
  const promesa = new Promise((resolve) => {
    setTimeout(() => {
      const filtro = products.filter((item) => item.categoria === categoria);
      resolve(filtro);
    }, 500);
  });
  return promesa;
}

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  const { categoria } = useParams();

  console.log(categoria);

  useEffect(() => {
    if (categoria === undefined) {
      getItems().then((respuesta) => {
        setProducts(respuesta);
      });
    } else {
      getItemsByCategory(categoria).then((respuesta) => setProducts(respuesta));
    }
  }, [categoria]);
  
  if(products.length === 0){
    
    return <Loader/>}

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
