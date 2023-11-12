//! funciín agregar producto

import React, { useState }  from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const ItemDetail = ({ id, idCategory, title, description, img, stock, price }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CartContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, title, description, price };
    agregarProducto(item, cantidad);
  }

  return (
    <>
    <div className='row justify-content-md-center my-2'>
      <div className='col-4'>
        <div className='card'>
          <img className='card-img-top' src={img} alt='Foto del producto' />
          <div className='card-body'>
            <h3 className='card-title'>{title}</h3>
            <h4 className='card-subtitle mb-2 text-muted'>{description}</h4>
            <h5 className='card-text'>Precio: {price} US$</h5>
            <h5 className='card-text'>Stock: {stock} Unidades</h5>
            <p className='card-text'>Cód. Producto: {id}</p>
            <p className='card-text'>Cód. Categoría: {idCategory}</p>
            {agregarCantidad > 0 ? (<Link className='btn btn-primary' to="/cart"> Terminar compra </Link>) : (<ItemCount stock={stock} inicial={1} funcionAgregar={manejadorCantidad} />)}
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default ItemDetail;
