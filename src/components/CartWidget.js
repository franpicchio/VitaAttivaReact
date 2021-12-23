import React from 'react'
import { useCartContext } from '../context/CartContext'

function CartWidget() {
    const {cartList, BorrarCarrito,BorrarItem } = useCartContext()

    return (
        <table>
            {cartList.map(productos =>  <tr className='d-flex'>
                                            <th>{productos.nombre}</th> 
                                            <td>{productos.cantidad}</td>
                                            <td><button className='btn btn-danger m-3' onClick={BorrarItem}>Eliminar</button></td>
                                        </tr>)}
            <button onClick={BorrarCarrito} className='btn btn-warning'>Vaciar Carrito</button>
        </table>
    )
}

export default CartWidget