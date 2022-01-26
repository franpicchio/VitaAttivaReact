import { createContext, useContext, useState } from "react";
//import { useCartContext } from "./CartContext";

const CompraContext = createContext([])

export const useCompraContext = () => useContext(CompraContext)

export const CompraContextProvider = ({children}) => {
    
    return (
            <CompraContext.Provider value={{/*idOrden, setIdOrden, finCompra, HandleSubmit*/}}>
                {children}
            </CompraContext.Provider>
    )
}