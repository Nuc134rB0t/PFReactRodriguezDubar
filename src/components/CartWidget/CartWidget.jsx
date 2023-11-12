//* Carrito de compras del NarBar
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const {cantidadTotal} = useContext(CartContext);

  return (
    <>
      <div className='btn-primary position-relative mx-4 mt-1'>
        <Link to="/cart">
          <a href="index.html" target="_self" rel="noopener noreferrer"><img src='https://firebasestorage.googleapis.com/v0/b/reactpfrodriguezdubar.appspot.com/o/img%2Fshopping-cart-blue.png?alt=media&token=77ed7a83-4981-4043-9eed-340e44af8c59&_gl=1*1p8emdd*_ga*MTYwNjg5MTMyMC4xNjk4Mjc5NTg0*_ga_CW55HF8NVT*MTY5OTE5Njc5NC44LjEuMTY5OTE5NjgwOC40Ni4wLjA.' height='45px' alt='Icono del carro de compras.' /></a>
          <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
            {cantidadTotal > 0 && <strong> {cantidadTotal} </strong> }
            {/* <span className='visually-hidden'>unread messages</span> */}
          </span>
        </Link>
      </div>
    </>
  );
};

export default CartWidget;
