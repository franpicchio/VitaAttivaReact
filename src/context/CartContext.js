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

    const BorrarItem = (id) => {
        setCartList(cartList.filter(prod => prod.id !== id))
    }

    const BorrarCarrito = () => {
        setCartList([])
    }

    function totalCantidad() {
        return cartList.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    function totalCompra() {
        return cartList.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    }

    return (
        <CartContext.Provider value={{cartList, AgregarAlCarrito, BorrarCarrito, BorrarItem, totalCantidad, totalCompra}}>
            {children}
        </CartContext.Provider>
    )
}
