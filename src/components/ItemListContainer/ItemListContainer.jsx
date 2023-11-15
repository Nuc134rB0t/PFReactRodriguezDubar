import { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom'; 
import ItemList from '../ItemList/ItemList';
import { getDocs, collection, where, query } from 'firebase/firestore'; 
import { db } from '../../services/config';
import PropTypes from 'prop-types';

const ItemListContainer = ({ greeting, suggestion }) => {
  const [showItems, setShowItems] = useState([]);
  const { idCategory } = useParams();
  
  useEffect(() => {
    const itemsList = idCategory ? query(collection(db, "items"), where("idCategory", "==", idCategory)) : collection(db, "items");
    getDocs(itemsList)
            .then(res => {
                const itemsListResult = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setShowItems(itemsListResult);
            })
            .catch(error => console.log(error))
  }, [idCategory]);

  return (
    <>
      <h1>{greeting}</h1>
      <h2>{suggestion}</h2>
      <ItemList products={showItems} />
    </>
  );
};

//* Corregir alertas de EsLint
ItemListContainer.propTypes = {
  greeting: PropTypes.string, // Indica que greeting es requerido y puede ser una cadena (string).
  suggestion: PropTypes.string, // Indica que suggestion no es requerido y puede ser una cadena (string) o estar ausente.
};

export default ItemListContainer;
