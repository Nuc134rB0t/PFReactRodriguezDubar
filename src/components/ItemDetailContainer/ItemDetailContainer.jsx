import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/config';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {
    const itemInfo = doc(db, "items", idItem);

    getDoc(itemInfo)
      .then(res => {
        const data = res.data();
        const foundItemInfo = { id: res.id, ...data }
        setProduct(foundItemInfo);
      })
      .catch(error => console.log(error))
  }, [idItem]);

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
