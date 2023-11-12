//* Listo!

import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, title, img, stock, price }) => {
  return (
    <div className='col-md-4 mb-4'>
      <div className='card'>
        <img className='card-img-top' src={img} alt={title} />
        <div className='card-body'>
          <h3 className='card-title'>{title}</h3>
          <p className='card-text'>Stock: {stock} Unidades</p>
          <p className='card-text'>Precio: {price} US$</p>
          <p className='card-text'>Cód. Producto: {id}</p>
          <Link to={`/item/${id}`} className='btn btn-primary'>
            Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};


export default Item;
