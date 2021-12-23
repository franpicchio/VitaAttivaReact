import {createContext, useState, useContext} from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const AgregarAlCarrito = (item) => {
        const existe = cartList.findIndex(i => i.id === item.id)

        if (existe > -1) {
            const cantidadExiste = cartList[existe].cantidad
            cartList.splice(existe, 1)
            setCartList([...cartList, {...item, cantidad: item.cantidad + cantidadExiste}])            
        }else{
            setCartList([...cartList, item])
        }
    }

    const BorrarItem = (item) => {
        const productoEliminado = cartList.filter(i => i.id !== item.id)
        setCartList([productoEliminado])
    }

    const BorrarCarrito = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{cartList, AgregarAlCarrito, BorrarCarrito, BorrarItem}}>
            {children}
        </CartContext.Provider>
    )
}
