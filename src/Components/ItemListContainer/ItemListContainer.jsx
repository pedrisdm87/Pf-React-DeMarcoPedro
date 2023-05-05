import React, { useState, useEffect } from "react";
import Flex from "../Flex/Flex";
import Item from "../Item/Item";
import products from "../data/productos";
import { useParams } from "react-router-dom";
import Categorias from "../Categorias/Categorias";
import Loader from "../Loader/Loader";


//----------------------FIRESTORE-------------------//

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfnaANbgvEOOvHkbsdhnVhLrfkBhHvXLE",
  authDomain: "pf-react-demarco.firebaseapp.com",
  projectId: "pf-react-demarco",
  storageBucket: "pf-react-demarco.appspot.com",
  messagingSenderId: "483455549687",
  appId: "1:483455549687:web:dd5c4c8d956e844a1553f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//----------------------------------------------------//

 async function  getItems_(){
  //async await

  //1.crear la rerferencia a la coleccion deseada
const productsRef = collection(db, "products");

//2.pedir los documentos de dicha coleccion

const productsSnap = getDocs(productsRef);
  const documents = productsSnap.docs;

//3.extraer los datos (.data()) de los documentos
const docsData = documents.map((doc) => doc.data())
return docsData;
}


getItems_();




//----------------------------------------------------//
/* function getItems() {
  const promesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
  return promesa;
} */

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
      getItems_().then((respuesta) => {
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
