import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({productos}) => {
    return (
        <article className="card w-25 m-3" key={productos.id}>
            <img src={productos.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">{productos.nombre}</h4>
                <p className="card-text">Precio: ${productos.precio}</p>
                <ItemCount stock={productos.stock} initial={1} />
                <button className="btn btn-primary m-2">Agregar al carrito</button>
            </div>
        </article>
    )
}

export default ItemDetail