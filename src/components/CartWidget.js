import React from 'react'
import { useCartContext } from '../context/CartContext'
import cart from '../img/cart.svg'

export const CartWidget = () => {
    const {totalCantidad} = useCartContext()

    return (
        <div className='d-flex'>
            <img src={cart} className="card-img-top mx-1" alt="Logo Vita Attiva" width="35" height="35" />
            {totalCantidad() !== 0 ?
            <span className="badge bg-warning align-self-center">{totalCantidad()}</span>
            :
            <span className="badge bg-secondary align-self-center visually-hidden">{totalCantidad()}</span>
            }
        </div>
    )
}

