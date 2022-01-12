import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import { useCompraContext } from '../context/CompraContext'
import { InfoComprador } from './InfoComprador'

function Cart() {
    const {cartList, BorrarCarrito,BorrarItem, totalCompra} = useCartContext()
    const {finCompra, FinalizarCompra} = useCompraContext()

    return (
            <section>
            {finCompra ?
            <InfoComprador />
                :
                
                <>
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
                        </table>
                    <button className='btn btn-success mx-2' onClick={()=>FinalizarCompra()}>Continuar con la Compra</button>
                    <button className='btn btn-danger' onClick={BorrarCarrito}>Vaciar Carrito</button>
                </>
                }
            </section>
    )
}

export default Cart