import { useState, useEffect, useRef } from 'react';
let showQtyOnBrowserTab = false; // Para evitar que se muestre la cantidad de productos en la renderización inicial, y mostrarla solo al seleccionar alguna

const ItemCount = ({ stock, startQty, onAdd }) => {
  //* Hooks */
  const [quantity, setQuantity] = useState(startQty); // Estado "cantidad" de productos. Array del estado de la cantidad del producto
  const [maxQtyBgColor, setMaxQtyBgColor] = useState('#fff'); // Estado "Color de fondo" del input de la "cantidad" que será agregada al carrito
  const [isDecreaseQtyDisabled, setIsDecreaseQtyDisabled] = useState(false);
  const [isIncreaseQtyDisabled, setIsIncreaseQtyDisabled] = useState(false);

  const inputRef = useRef(null); // Referenciar al input para poder seleccionar el texto

  useEffect(() => {
    document.title = showQtyOnBrowserTab
      ? `Mario Store - ${quantity} Productos`
      : 'Mario Store'; // Evaluar si se debe mostrar la cantidad de productos en el título de la ventana, según si ha cambiado su estado

    //* Cambiar el color de fondo del input cantidad, cuando llega al máximo de stock.
    if (quantity >= stock) {
      setMaxQtyBgColor('#e9e9e9');
    } else {
      setMaxQtyBgColor('#fff');
    }

    setIsDecreaseQtyDisabled(quantity <= 1);
    setIsIncreaseQtyDisabled(quantity >= stock);
  }, [quantity, stock]); // EsLint sugiere agregar la dependencia "stock"

  //* Funciones que actualizan (incrementan/decrementan) el estado del campo que muestra la cantidad del producto
  const increaseQty = () => {
    if (stock > 0 && quantity < stock) {
      setQuantity((currentValue) => currentValue + 1); // De esta forma se actualiza el estado, tomando el valor actual desde el segundo parámetro (la función). Lo cual permite habilitar el resultado para entregarselo a otros componentes si fuese necesario.
      showQtyOnBrowserTab = true; // Habilitar la cantidad del producto en el título de la venta, ahora que ha cambiado su estado
    }
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity((currentValue) => currentValue - 1); // De esta forma se actualiza el estado, tomando el valor actual desde el segundo parámetro (la función). Lo cual permite habilitar el resultado para entregarselo a otros componentes si fuese necesario.
      showQtyOnBrowserTab = true; // Habilitar la cantidad del producto en el título de la venta, ahora que ha cambiado su estado
    }
  };

  //* Función que actualiza al cambiar directamente la cantidad del producto
  const handleChangeQty = (event) => {
    const typedQty = parseInt(event.target.value);

    if (
      !isNaN(typedQty) &&
      typedQty >= 1 &&
      typedQty <= stock
    ) {
      setQuantity(typedQty);
      showQtyOnBrowserTab = true; // Habilitar la cantidad del producto en el título de la venta, ahora que ha cambiado su estado
    }
  };

  //* Función que selecciona automáticamente el contenido del input al enfocarlo
  const selectInputText = () => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  };

  return (
    <div>
      <button
        onClick={decreaseQty}
        disabled={isDecreaseQtyDisabled}
        className='btn btn-light col-2'
      >
        {' '}
        -{' '}
      </button>
      <input
        ref={inputRef} // Asignar la referencia al input
        onFocus={selectInputText} // Llamar a la función cuando el input obtiene el enfoque
        type='text'
        value={quantity}
        onChange={handleChangeQty}
        inputMode='numeric' // Evitar las flechas de incremento y disminución
        pattern='[0-9]*' // Permetir solo caracteres numéricos
        className='btn btn-light text-center my-2 col-2'
        style={{ backgroundColor: maxQtyBgColor }}
        autoComplete='off' // Prevenir advertencia: Uso de contraseña segura
      />
      <button
        onClick={increaseQty}
        disabled={isIncreaseQtyDisabled}
        className='btn btn-light col-2'
      >
        {' '}
        +{' '}
      </button>
      <button onClick={() => onAdd(quantity)} className='btn btn-success col-6'>
        {' '}
          Agregar al carrito{' '}
      </button>
    </div>
  );
};

export default ItemCount;
