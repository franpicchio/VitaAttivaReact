import React from 'react'
import {useState} from 'react'

const ItemCount = ({stock,initial}) => {
    const [contador, SetContador] = useState (initial);
    
    const HandleSuma = () =>{
        if(contador<stock)
        SetContador (contador + 1);
    }
    const HandleResta = () =>{
        if(contador>initial)
        SetContador (contador - 1);
    }
    
    return(
        <article className="w-25">
            <h3>Producto</h3>
            <img alt="Acá va una imagen" />
            <div className="d-flex justify-content-around">
                <button onClick = {HandleResta}>-</button>
                <p>{contador}</p>
                <button onClick = {HandleSuma}>+</button>
            </div>
        </article>
    )
}

export default ItemCount