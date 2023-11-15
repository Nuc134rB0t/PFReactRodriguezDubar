import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../services/config';
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';

const Checkout = () => {
  const [customerName, setCustomerName] = useState('');
  const [customerLastname, setCustomerLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmation, setEmailConfirmation] = useState('');
  const [error, setError] = useState('');
  const [orderId, setOrderId] = useState('');

  const { cart, emptyCart, total, totalQty } = useContext(CartContext);

  const handleForm = (event) => {
    event.preventDefault();

    if (
      !customerName ||
      !customerLastname ||
      !phone ||
      !email ||
      !emailConfirmation
    ) {
      setError('Debe completar los datos.');
      return;
    }

    if (email !== emailConfirmation) {
      setError('E-mail no coincide');
      return;
    }

    const order = {
      items: cart.map((product) => ({
        id: product.item.id,
        title: product.item.title,
        quantity: product.quantity,
      })),
      total: total,
      fecha: new Date(),
      customerName,
      customerLastname,
      phone,
      email,
    };

    Promise.all(
      order.items.map(async (productOrder) => {
        const productRef = doc(db, 'items', productOrder.id);
        const productDoc = await getDoc(productRef);
        const currentStock = productDoc.data().stock;
        await updateDoc(productRef, {
          stock: currentStock - productOrder.quantity,
        });
      })
    )
      .then(() => {
        addDoc(collection(db, 'ordenes'), order)
          .then((docRef) => {
            setOrderId(docRef.id);
            emptyCart();
          })
          .catch((error) => {
            console.log('Algo anda mal.', error);
            setError('Error al crear la order, por favor vuelva a intentarlo.');
          });
      })
      .catch((error) => {
        console.log('No se puede actualizar el stock.', error);
        setError('No se puede actualizar el stock.');
      });
  };

  return (
    <div className='card border-secondary mb-3'>
      <div className='card-body text-secondary'>
        <h2> Checkout </h2>
        <form onSubmit={handleForm}>
          {cart.map((product) => (
            <div key={product.item.id}>
              <p>
                {' '}
                {product.item.title} x {product.quantity} ={' '}
                {product.quantity * product.item.price} USD{' '}
              </p>
              <hr />
            </div>
          ))}
          <strong>Cantidad Total: {totalQty} </strong>
          <hr />

          <div className='form-group'>
            <label htmlFor=''> Nombre </label>
            <input
              type='text'
              value={customerName}
              onChange={(event) => setCustomerName(event.target.value)}
            />
          </div>

          <div className='form-group'>
            <label htmlFor=''> Apellido </label>
            <input
              type='text'
              value={customerLastname}
              onChange={(event) => setCustomerLastname(event.target.value)}
            />
          </div>

          <div className='form-group'>
            <label htmlFor=''> Teléfono </label>
            <input
              type='text'
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>

          <div className='form-group'>
            <label htmlFor=''> Email </label>
            <input
              type='email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className='form-group'>
            <label htmlFor=''> Email Confirmación </label>
            <input
              type='email'
              value={emailConfirmation}
              onChange={(event) => setEmailConfirmation(event.target.value)}
            />
          </div>

          {error && <p style={{ color: 'red' }}> {error} </p>}

          <button className='btn btn-success' type='submit'>
            {' '}
            Finalizar Compra{' '}
          </button>
        </form>
        {orderId && (
          <strong>¡Gracias por tu compra! Número de orden: {orderId} </strong>
        )}
      </div>
    </div>
  );
};

export default Checkout;
