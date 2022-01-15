import { createContext, useContext, useState } from "react";
import { useCartContext } from "./CartContext";


const CompraContext = createContext([])

export const useCompraContext = () => useContext(CompraContext)

export const CompraContextProvider = ({children}) => {

    
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

    //console.log(ordenComprador)

    


    return (
            <CompraContext.Provider value={{setOrdenComprador, /*FinalizarCompra,*/ HandleOrden}}>
                {children}
            </CompraContext.Provider>
    )
}