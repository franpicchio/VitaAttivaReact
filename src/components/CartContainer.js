import React from 'react'
import { useCartContext } from '../context/CartContext'
import Cart from './Cart'
import { Link } from 'react-router-dom'


export const CartContainer = () => {
    const {totalCantidad} = useCartContext()

    return (
        <section>
            <h1>Carrito</h1>
            {totalCantidad() !== 0 ?
            <Cart />
            :
            <div>
                <h2>Su carrito está vacío</h2>
                <Link to='/'>
                    <button className="btn btn-danger m-2">Ir al inicio</button>
                </Link>
            </div>
            }
        </section>
    )
}
