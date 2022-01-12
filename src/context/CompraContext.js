import { createContext, useContext, useState } from "react";
import { useCartContext } from "./CartContext";
import {collection, addDoc, getFirestore} from 'firebase/firestore'

const CompraContext = createContext([])

export const useCompraContext = () => useContext(CompraContext)

export const CompraContextProvider = ({children}) => {
    const [finCompra, setFinCompra] = useState(false)
    const [idOrden, setIdOrden] = useState('')
    const [ordenComprador, setOrdenComprador] = useState({nombre:"", email:"", telefono:""})

    const {totalCompra, cartList} = useCartContext()

    const HandleOrden = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        /*setOrdenComprador({
            ...ordenComprador, 
            [e.target.nombre]: e.target.value
        })*/
    }

    console.log(ordenComprador)

    const FinalizarCompra = (e) =>{
        e.preventDefault()

        let orden = {}

        orden.comprador = ordenComprador
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
    }


    return (
            <CompraContext.Provider value={{finCompra, idOrden, setOrdenComprador, FinalizarCompra, HandleOrden}}>
                {children}
            </CompraContext.Provider>
    )
}