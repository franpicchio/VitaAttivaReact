import React from 'react'
import { useCartContext } from '../context/CartContext'
import {collection, addDoc, getFirestore} from 'firebase/firestore'
import { useState } from 'react'
import { InfoComprador } from './InfoComprador'

function Cart() {
    const [idOrden, setIdOrden] = useState('')
    const {cartList, BorrarCarrito,BorrarItem, totalCompra} = useCartContext()
    const [continuarCompra, setContinuarCompra] = useState(false)

    const FinalizarCompra = (e) =>{

        e.preventDefault()
        let orden = {}
        orden.comprador = {}
        orden.total = totalCompra()

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id
            const nombre = cartItem.nombre
            const precio = cartItem.precio
            const cantidad = cartItem.cantidad

            return {id, nombre, precio, cantidad}
        })

        const bd = getFirestore()
        const ordenColeccion = collection(bd, 'ordenes')
        addDoc(ordenColeccion, orden)
        .then(resp => setIdOrden(resp.id))
        .catch(err => console.log(err))
        .finally(()=> setContinuarCompra(true))
    }

    return (
        <section>
        {continuarCompra ?
            <InfoComprador idOrden={idOrden}/>
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
            <button className='btn btn-success mx-2' onClick={FinalizarCompra}>Continuar con la Compra</button>
            <button className='btn btn-danger' onClick={BorrarCarrito}>Vaciar Carrito</button>
        </>
        }
        </section>
    )
}

export default Cart