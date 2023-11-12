import { useState, useEffect, useRef } from 'react';
let mostrarEnTitulo = false; // Para evitar que se muestre la cantidad de productos en la renderización inicial, y mostrarla solo al seleccionar alguna

const ItemCount = ({ stock, inicial, funcionAgregar }) => {
  //* Hooks */
  const [cantidad, setCantidad] = useState(inicial); // Estado "Cantidad" de productos. Array del estado de la cantidad del producto
  const [colorBgInput, setBGColor] = useState('white'); // Estado "Color de fondo" del input de la "Cantidad" que será agregada al carrito
  const [isDecrementDisabled, setIsDecrementDisabled] = useState(false);
  const [isIncrementDisabled, setIsIncrementDisabled] = useState(false);

  const inputRef = useRef(null); // Referenciar al input para poder seleccionar el texto

  useEffect(() => {
    document.title = mostrarEnTitulo
      ? `Mario Store - ${cantidad} Productos`
      : 'Mario Store'; // Evaluar si se debe mostrar la cantidad de productos en el título de la ventana, según si ha cambiado su estado

    // Cambiar el color de fondo del input cantidad, cuando llega al máximo de stock.
    if (cantidad >= stock) {
      setBGColor('#e9e9e9');
    } else {
      setBGColor('white');
    }

    setIsDecrementDisabled(cantidad <= 1);
    setIsIncrementDisabled(cantidad >= stock);
  }, [cantidad, stock]); // EsLint sugiere agregar la dependencia "stock"

  //* Funciones que actualizan (incrementan/decrementan) el estado del campo que muestra la cantidad del producto
  const incrementarCantidad = () => {
    if (stock > 0 && cantidad < stock) {
      // setCantidad(cantidad + 1); // De esta forma se actualiza el estado, tomando el valor actual desde el primer parámetros (el estado en sí). Lo cual podría hacer que el resultado sea inaccesible para otros componentes.
      setCantidad((valorActual) => valorActual + 1); // De esta forma se actualiza el estado, tomando el valor actual desde el segundo parámetro (la función). Lo cual permite habilitar el resultado para entregarselo a otros componentes si fuese necesario.
      mostrarEnTitulo = true; // Habilitar la cantidad del producto en el título de la venta, ahora que ha cambiado su estado
    }
  };

  const decrementarCantidad = () => {
    if (cantidad > 1) {
      // setCantidad(cantidad - 1); // De esta forma se actualiza el estado, tomando el valor actual desde el primer parámetros (el estado en sí). Lo cual podría hacer que el resultado sea inaccesible para otros componentes.
      setCantidad((valorActual) => valorActual - 1); // De esta forma se actualiza el estado, tomando el valor actual desde el segundo parámetro (la función). Lo cual permite habilitar el resultado para entregarselo a otros componentes si fuese necesario.
      mostrarEnTitulo = true; // Habilitar la cantidad del producto en el título de la venta, ahora que ha cambiado su estado
    }
  };

  //* Funciones que actualizan al cambiar directamente la cantidad del producto
  const handleChangeCantidad = (event) => {
    const cantidadDigitada = parseInt(event.target.value);

    if (
      !isNaN(cantidadDigitada) &&
      cantidadDigitada >= 1 &&
      cantidadDigitada <= stock
    ) {
      setCantidad(cantidadDigitada);
      mostrarEnTitulo = true; // Habilitar la cantidad del producto en el título de la venta, ahora que ha cambiado su estado
    }
  };

  //* Función que selecciona automáticamente el contenido del input al enfocarlo
  const selectInputText = () => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  };

  //* Muestra la cantidad agregada al carrito
  /* const agregarAlCarrito = () => {
    console.log(`Ha agregado ${cantidad} al carrito`); // ToDo: Reemplazar por SweetAlert o eliminar
  }; */

  return (
    <div>
      <button
        onClick={decrementarCantidad}
        disabled={isDecrementDisabled}
        className='btn btn-light col-2'
      >
        {' '}
        -{' '}
      </button>
      <input
        ref={inputRef} // Asignar la referencia al input
        onFocus={selectInputText} // Llamar a la función cuando el input obtiene el enfoque
        type='text'
        value={cantidad}
        onChange={handleChangeCantidad}
        inputMode='numeric' // Evitar las flechas de incremento y disminución
        pattern='[0-9]*' // Permetir solo caracteres numéricos
        className='btn btn-light text-center my-2 col-2'
        style={{ backgroundColor: colorBgInput }}
        autoComplete='off' // Prevenir advertencia: Uso de contraseña segura
      />
      <button
        onClick={incrementarCantidad}
        disabled={isIncrementDisabled}
        className='btn btn-light col-2'
      >
        {' '}
        +{' '}
      </button>
      <button onClick={() => funcionAgregar(cantidad)} className='btn btn-success col-6'>
        {' '}
        Agregar al carrito{' '}
      </button>
    </div>
  );
};

export default ItemCount;
