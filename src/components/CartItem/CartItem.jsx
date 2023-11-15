import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItem = ({ item, quantity }) => {
  const { removeProduct } = useContext(CartContext);

  return (
    <div key={item.id}>
      <h4> {item.title} </h4>
      <p> Cantidad: {quantity} </p>
      <p> Precio USD: {item.price} </p>
      <button className='btn btn-danger' onClick={() => removeProduct(item.id)}>
        {' '}
        Eliminar{' '}
      </button>
      <hr />
    </div>
  );
};

export default CartItem;
