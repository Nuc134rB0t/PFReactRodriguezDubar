import Item from '../Item/Item';

const ItemList = ({ products }) => {
  return (
    <div className='row justify-content-center align-items-center g-2'>
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
