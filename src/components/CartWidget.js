import React from 'react'
/*import { useState } from 'react'
import { useCartContext } from '../context/CartContext'*/
import cart from '../img/cart.svg'

export const CartWidget = () => {
    /*const[cantidadCarrito, setCantidadCarrito] = useState(true)

    const {cartList} = useCartContext()*/

    return (
        <div className='d-flex'>
            <img src={cart} className="card-img-top mx-1" alt="Logo Vita Attiva" width="35" height="35" />
        </div>
    )
}

/*{cantidadCarrito ?
            <span className="badge bg-secondary align-self-center visually-hidden">{}</span>
            :
            <span className="badge bg-secondary align-self-center">{cartList.length}</span>
            }*/