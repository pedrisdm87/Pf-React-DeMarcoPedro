import React from "react";
import Flex from "../Flex/Flex";
import Item from "../Item/Item";
import imagenes from "../img/imagenes";

function ItemListContainer(){

  const products =[
    {
      nombre: "Tubo 100W",
      id:"1",
      detalle:"Tubo 100W",
      precio:30.0000,
      cantidad:1,
      imagen: "img/tubo.webp"
  },
  
  {
      nombre: "Controladora 6445",
      id:2,
      detalle:"Controladora 6445",
      precio:220.000,
      cantidad:1,
      imagen: "img/controladora.jpg"
  },
  {
      nombre: "Lente D.Foc. 101mm",
      id:3,
      detalle:"Lente D.Foc. 101mm",
      precio:15.000,
      cantidad:"1",
      imagen: "img/lente.jpg"
  },
  {
      nombre: "Fuente 100w",
      id:4,
      detalle:"Fuente 100w",
      precio:185.000,
      cantidad:1,
      imagen: "img/fuente.webp"
  },
  {
      nombre: "Tubo 90W",
      id:5,
      detalle:"Tubo 90W",
      precio:200.000,
      cantidad:1,
      imagen: "img/tubo.webp"
  },
  {
      nombre: "Controladora 6442",
      id:6,
      detalle:"Controladora 6442",
      precio:220.000,
      cantidad:1,
      imagen: "img/controladora 2.jpg"
  },
  {
      nombre: "Lente D..76mm",
      id:7,
      detalle:"Lente D..76mm",
      precio:15.000,
      cantidad:1,
      imagen: "img/lente.jpg"
  },
  {
      nombre: "Fuente 90w",
      id:8,
      detalle:"Fuente 90w",
      precio:150.000,
      cantidad:1,
      imagen: "img/fuente.webp"
  },
  {
      nombre: "Tubo 80W",
      id:9,
      detalle:"Tubo 80W",
      precio:180.000,
      cantidad:1,
      imagen: "img/tubo.webp"
  },
  {
      nombre: "Puntero Láser",
      id:10,
      detalle:"Puntero Láser",
      precio:5.000,
      cantidad:1,
      imagen: "img/puntero.jpg"
  },
  {
      nombre: "producto11",
      id:11,
      detalle:"Lente D..63mm",
      precio:15.000,
      cantidad:1,
      imagen: "img/lente.jpg"
  },
  {
      nombre: "Fuente 80w",
      id:12,
      detalle:"Fuente 80w",
      precio:125.000,
      cantidad:1,
      imagen: "img/fuente.webp"
  },
  {
      nombre: "Fuente 50w",
      id:13,
      detalle:"Fuente 50w",
      precio:75.000,
      cantidad:1,
      imagen: "img/fuente.webp"
  },
  {
      nombre: "Tubo 65W",
      id:14,
      detalle:"Tubo 65W",
      precio:110.000,
      cantidad:1,
      imagen: "img/tubo.webp"
  },
  {
      nombre: "Correa 3M",
      id:15,
      detalle:"Correa 3M",
      precio:3.500,
      cantidad:1,
      imagen: "img/correa.webp"
  },
  {
      nombre: "Lente D..50mm",
      id:16,
      detalle:"Lente D..50mm",
      precio:15.000,
      cantidad:1,
      imagen: "img/lente.jpg"
  },
  {
      nombre: "Fuente 65w",
      id:17,
      detalle:"Fuente 65w",
      precio:80.000,
      cantidad:1,
      imagen: "img/fuente.webp"
  },
  {
      nombre: "Tubo 50W",
      id:18,
      detalle:"Tubo 50W",
      precio:70.000,
      cantidad:1,
      imagen: "img/tubo.webp"
  },
  {
      nombre: "Polea",
      id:19,
      detalle:"Polea",
      precio:4.000,
      cantidad:1,
      imagen: "img/polea.jpg"
  },
  {
      nombre: "Lente D..30mm",
      id:20,
      detalle:"Lente D..30mm",
      precio:15.000,
      cantidad:1,
      imagen: "img/lente.jpg"
  }

]
  }

    return(
          <div>
            <Flex>
        
          products.map( producto =>(
            return( 
            <Item
            nombre= {producto.nombre}
            precio={producto.precio}
            detalle={producto.detalle}
            imagen={producto.imagen}
            />
            );
            )
            </Flex>
          </div>
  )


export default ItemListContainer;