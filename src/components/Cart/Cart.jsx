import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
  const { cart, emptyCart, total, totalQty } = useContext(CartContext);

  if (totalQty === 0) {
    return (
      <div className='card border-secondary mb-3'>
        <div className='card-body text-secondary'>
          <h2> Carrito vacío. </h2>
          <Link className='btn btn-primary' to='/'>
            {' '}
            Ver Productos{' '}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='card border-secondary mb-3'>
      {cart.map(({ item, quantity }) => (
        <CartItem key={item.id} item={item} quantity={quantity} />
      ))}
      <div className='card-body text-secondary'>
        <h3>Productos: {totalQty} </h3>
        <h3>Total USD: {total} </h3>
        <button className='btn btn-secondary' onClick={() => emptyCart()}>
          {' '}
          Vaciar Carrito{' '}
        </button>
        <Link className='btn btn-success' to='/checkout'>
          {' '}
          Finalizar Compra{' '}
        </Link>
      </div>
    </div>
  );
};

export default Cart;