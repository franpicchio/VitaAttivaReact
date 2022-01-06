import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({prod}) => {
    return (
        <article className="card w-25 m-3" key={prod.id}>
            <img src={prod.imagen} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">{prod.nombre}</h4>
                <p className="card-text">Precio: ${prod.precio}</p>
                <Link to={`/item/${prod.id}`}>
                    <button className='btn btn-secondary'>Detalles del producto</button>
                </Link>
            </div>
        </article>
    )
}

export default Item