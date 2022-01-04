import React from 'react'
import {useState} from 'react'

const ItemCount = ({stock,initial,onAdd}) => {
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
        <div>
            <div className="d-flex justify-content-around m-3">
                <button className='btn btn-danger rounded' onClick = {HandleResta}>-</button>
                <p>{contador}</p>
                <button className='btn btn-danger nrounded' onClick = {HandleSuma}>+</button>
            </div>
            <button className="btn btn-primary m-2" onClick={() => onAdd(contador)}>Agregar al carrito</button>
        </div>
    )
}


export default ItemCount