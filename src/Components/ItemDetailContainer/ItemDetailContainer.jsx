import React, { useState, useEffect} from "react";
import Flex from "../Flex/Flex";
import Item from "../Item/Item";
import './itemDetailContainer.css';
import products from "../data/productos"
import { useParams } from "react-router-dom";


function getSingleItem(idURL) {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(()=>{ 
            const itemRecuested = products.find( item =>{
                return (item.id=== Number(idURL))
            })
            resolve(itemRecuested)
        },1000) 
    });

    return promesa;
}



function ItemDetailContainer() {
    const [product, setProduct] = useState([]);

    let { id } = useParams();

    useEffect(()=>{
          getSingleItem(id).then((respuesta) =>{
            setProduct(respuesta);
        });
      }, []);


return(
    <div>
        <Flex>
        <img src={product.imagen}/>
        <h1>{product.nombre}</h1>
        <h2>{product.categoria}</h2>
        <h3>{product.descripcion}</h3>
        <p>Precio:$ {product.precio}</p>
        </Flex>
    </div>
)
}

export default ItemDetailContainer;