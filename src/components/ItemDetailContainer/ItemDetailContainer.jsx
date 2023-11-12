// Todo Falta, pero funciona

import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
// import { getDoc, doc } from 'firebase/firestore';
// import { db } from '../../services/config';
import { getProduct } from '../../assets/mock/itemsmock'; // Todo: Reemplazar por local db

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {
    // ToDo: Reemplazar por local db
    /* const nuevoDoc = doc(db, "ReactPFRodriguezDubar", idItem);

    getDoc(nuevoDoc)
      .then(res => {
        const data = res.data();
        const nuevoProducto = { id: res.id, ...data }
        setProducto(nuevoProducto);
      })
      .catch(error => console.log(error))
  }, [idItem]); */

    getProduct(idItem).then((res) => setProducto(res));
  }, [idItem]);

  return (
    <div>
      <ItemDetail {...producto} />
    </div>
  );
};

export default ItemDetailContainer;
