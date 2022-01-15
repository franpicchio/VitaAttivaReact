import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import { useCompraContext } from '../context/CompraContext'
import { InfoComprador } from './InfoComprador'
import {collection, addDoc, getFirestore} from 'firebase/firestore'

function Cart() {
    const {cartList, BorrarCarrito,BorrarItem, totalCompra} = useCartContext()
    const [idOrden, setIdOrden] = useState('')
    const [finCompra, setFinCompra] = useState(false)

    const FinalizarCompra = (e) =>{

        e.preventDefault()
        let orden = {}
        orden.comprador = {nombre: 'Francisco', mail: 'francisco@gmail.com', telefono:'1234567890'}
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
        .finally(()=> setFinCompra(false))

        console.log(orden)
        console.log(idOrden)
    }

    return (
    <section>
        {idOrden !== '' ?
            <h2>El id de su orden es {idOrden}</h2>
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
                    <form onSubmit={FinalizarCompra}>
                        <button className='btn btn-success mx-2'>Continuar con la Compra</button>
                    </form>
                    <button className='btn btn-danger' onClick={BorrarCarrito}>Vaciar Carrito</button>
                </>
            
        }
    </section>
    )
}

export default Cart