import React from 'react'
import { useCartContext } from '../context/CartContext'
import {Link} from 'react-router-dom'
import {useState} from 'react'

function Cart() {
    const {cartList, BorrarCarrito,BorrarItem } = useCartContext()

    const [carrito, setCarrito] = useState(true)

    if (cartList.length === 0) {
        setCarrito(false)
    }

    return (
        <section>
            <h1>Carrito</h1>
            {carrito ?
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Subtotal</th>
                    <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                {cartList.map(productos =>  <tbody>
                                                <tr>
                                                <th scope="row">1</th>
                                                <td>{productos.nombre}</td>
                                                <td>{productos.cantidad}</td>
                                                <td>Subtotal</td>
                                                <td><button className='btn btn-danger m-3' onClick={() => BorrarItem(productos.id)}>Eliminar</button></td>
                                                </tr>
                                            </tbody>)}
                <button className='btn btn-danger' onClick={BorrarCarrito}>Vaciar Carrito</button>
            </table> 
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

export default Cart