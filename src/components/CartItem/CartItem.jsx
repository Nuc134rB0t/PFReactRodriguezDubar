import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CartContext);

  return (
    <div>
        <h4> {item.title} </h4>
        <p> Cantidad: {cantidad} </p>
        <p> Precio USD: {item.price} </p>
        <button className="btn btn-danger" onClick={() => eliminarProducto(item.id)}> Eliminar </button>
        <hr />
    </div>
  )
}

export default CartItem