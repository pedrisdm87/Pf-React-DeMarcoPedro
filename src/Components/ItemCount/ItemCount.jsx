import React, {useState} from 'react'
import "./ItemCount.css"


export default function ItemCount(props) {
    
    const[ count, setCount] = useState(1);


    function handleAdd(){
        if (count < props.cantidad){
           setCount(count + 1)
        }
        else{
            alert("No hay stock disponible en estos momentos."); 
        }
    }
    function handleSubstract(){
        if (count>1){
           setCount(count - 1)
        }
        else{
            alert("Debes tener al menos 1 producto.");
        }
    }
  

    return (
    <div className='buttton'>
        <button  onClick={handleSubstract}> - </button>
        <span> {count} </span>
        <button onClick={handleAdd}> + </button> 
        <button onClick={()=>props.onAddToCart(count)} > Comprar </button>
    </div> )
}
