import React from 'react'
import ItemCount from './ItemCount'


const Item = ({prod}) => {
    return (
        <article className="card w-25 m-3" key={prod.id}>
            <img src={prod.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">{prod.nombre}</h4>
                <p className="card-text">Precio: ${prod.precio}</p>
                <ItemCount stock={prod.stock} initial={1} />
                <button className="btn btn-primary m-2">Agregar al carrito</button>
            </div>
        </article>
    )
}

export default Item