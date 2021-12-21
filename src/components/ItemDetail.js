import React from 'react'
import ItemCount from './ItemCount'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const ItemDetail = ({productos}) => {
    const [irCarrito, setIrCarrito] = useState(true)

    const onAdd = (cantidad) => {
        setIrCarrito(false)
        console.log(`Se han agregado ${cantidad} productos al carrito`)
    }

    
    return (
        <article className="card w-25 m-3" key={productos.id}>
            <img src={productos.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">{productos.nombre}</h4>
                <p className="card-text">Precio: ${productos.precio}</p>
                {irCarrito ? (
                <ItemCount stock={productos.stock} initial={1} onAdd={onAdd} />
                ) : (
                <Link to='/cart'>
                    <button className="btn btn-primary m-2">Ir al carrito</button>
                </Link>
                )} 
            </div>
        </article>
    )
}

export default ItemDetail