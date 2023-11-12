import { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom'; 
import ItemList from '../ItemList/ItemList';
// import { getProducts, getProductsCategory } from '../../assets/mock/itemsmock';
import { getDocs, collection, where, query } from 'firebase/firestore'; 
import { db } from '../../services/config';
import PropTypes from 'prop-types';

const ItemListContainer = ({ greeting, suggestion }) => {

  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {    
    const misProductos = idCategoria ? query(collection(db, "ReactPFRodriguezDubar"), where("idCategoria", "==", idCategoria)) : collection(db, "items");
    getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProductos(nuevosProductos);
            })
            .catch(error => console.log(error))
  }, [idCategoria]);


  return (
    <>
      <h1>{greeting}</h1>
      <h2>{suggestion}</h2>
      <ItemList productos={productos} />
    </>
  );
};

//* Corregir alertas de EsLint
ItemListContainer.propTypes = {
  greeting: PropTypes.string, // Indica que greeting es requerido y puede ser una cadena (string).
  suggestion: PropTypes.string, // Indica que suggestion no es requerido y puede ser una cadena (string) o estar ausente.
};

export default ItemListContainer;
