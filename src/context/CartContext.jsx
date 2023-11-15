import { useState, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
    totalQty: 0
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [totalQty, setTotalQty] = useState(0);
    const [total, setTotal] = useState(0);

    //* Prevenir duplicados
    const addProduct = (item, quantity) => {
        const productExists = cart.find(prod => prod.item.id === item.id);

        if(!productExists) {
            setCart( prev => [...prev, {item, quantity}]);
            setTotalQty(prev => prev + quantity);
            setTotal(prev => prev + (item.price * quantity));
        } else {
            const carUpdate = cart.map( prod => {
                if(prod.item.id === item.id) {
                    return {...prod, quantity:prod.quantity + quantity};
                } else {
                    return prod;
                }
            });
            setCart(carUpdate);
            setTotalQty(prev => prev + quantity);
            setTotal(prev => prev + (item.price * quantity));
        }
    }

    //* Eliminar producto: 
    const removeProduct = (id) => {
        const productoEliminado = cart.find(prod => prod.item.id === id);
        const carUpdate = cart.filter(prod => prod.item.id !== id);

        setCart(carUpdate);
        setTotalQty(prev => prev - productoEliminado.quantity);
        setTotal(prev => prev - (productoEliminado.item.price * productoEliminado.quantity));
    }

    //* Vaciar el carrito: 
    const emptyCart = () => {
        setCart([]);
        setTotalQty(0);
        setTotal(0);
    }

    return (
        <CartContext.Provider value={{cart, addProduct, removeProduct, emptyCart, total, totalQty}}>
            {children}
        </CartContext.Provider>
    )

}