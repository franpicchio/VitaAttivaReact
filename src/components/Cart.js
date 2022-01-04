import React from 'react'
import { useCartContext } from '../context/CartContext'
import {Link} from 'react-router-dom'

function Cart() {
    const {cartList, BorrarCarrito,BorrarItem, totalCantidad, totalCompra} = useCartContext()

    return (
        <section>
            <h1>Carrito</h1>
            {totalCantidad() !== 0 ?
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Subtotal</th>
                    <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                {cartList.map(productos =>  <tbody>
                                                <tr>
                                                <th scope="row">{productos.id}</th>
                                                <td>{productos.nombre}</td>
                                                <td>{productos.cantidad}</td>
                                                <td>${productos.precio}</td>
                                                <td>${productos.precio*productos.cantidad}</td>
                                                <td><button className='btn btn-danger m-3' onClick={() => BorrarItem(productos.id)}>Eliminar</button></td>
                                                </tr>
                                            </tbody>)}
                <tr>
                    <th scope="row">Total compra = ${totalCompra()}</th>
                </tr>
                <button className='btn btn-success mx-2'>Finalizar Compra</button>
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