import { useState, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
    cantidadTotal: 0
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [cantidadTotal, setCantidadTotal] = useState(0);
    const [total, setTotal] = useState(0);

    // Prevenir duplicados
    const agregarProducto = (item, cantidad) => {
        const productoExistente = cart.find(prod => prod.item.id === item.id);

        if(!productoExistente) {
            setCart( prev => [...prev, {item, cantidad}]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.price * cantidad));
        } else {
            const cartActualizado = cart.map( prod => {
                if(prod.item.id === item.id) {
                    return {...prod, cantidad:prod.cantidad + cantidad};
                } else {
                    return prod;
                }
            });
            setCart(cartActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.price * cantidad));
        }
    }

    // Eliminar producto: 

    const eliminarProducto = (id) => {
        const productoEliminado = cart.find(prod => prod.item.id === id);
        const cartActualizado = cart.filter(prod => prod.item.id !== id);

        setCart(cartActualizado);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.price * productoEliminado.cantidad));
    }

    // Vaciar el carrito: 
    const vaciarCart = () => {
        setCart([]);
        setCantidadTotal(0);
        setTotal(0);
    }

    return (
        <CartContext.Provider value={{cart, agregarProducto, eliminarProducto, vaciarCart, total, cantidadTotal}}>
            {children}
        </CartContext.Provider>
    )

}