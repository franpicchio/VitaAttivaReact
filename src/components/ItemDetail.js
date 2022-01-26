import React from 'react'
import ItemCount from './ItemCount'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import { useCartContext } from '../context/CartContext'

const ItemDetail = ({productos}) => {
    const [irCarrito, setIrCarrito] = useState(true)

    const {cartList, AgregarAlCarrito} = useCartContext()

    const onAdd = (cantidad) => {
        setIrCarrito(false)
        AgregarAlCarrito({...productos, cantidad:cantidad})
    }
    
    return (
        <article className="card w-25 m-3" key={productos.id}>
            <img src={productos.imagen} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">{productos.nombre}</h4>
                <p className="card-text">Precio: ${productos.precio}</p>
                <p className="card-text">{productos.descripcion}</p>
                {irCarrito ? (
                <ItemCount stock={productos.stock} initial={1} onAdd={onAdd} />
                ) : (
                    <div>
                    <Link to='/cart'>
                        <button className="btn btn-primary m-2">Ir al carrito</button>
                    </Link>
                    <Link to='/'>
                    <button className="btn btn-danger m-2">Seguir Comprando</button>
                    </Link>
                </div>
                )} 
            </div>
        </article>
    )
}

export default ItemDetail