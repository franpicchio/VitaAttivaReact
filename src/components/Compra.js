import React from 'react'
import { useCartContext } from '../context/CartContext'
import { InfoComprador } from './InfoComprador'

export const Compra = () => {
    const {finCompra, idOrden} = useCartContext()

    return (
        <section>
            {finCompra ?
            <>
            <h2>Compra Finalizada con Exito</h2>
            <p>El id de su orden es {idOrden}</p>
            </>
            :
            <InfoComprador />
            }  
        </section>
    )
}
