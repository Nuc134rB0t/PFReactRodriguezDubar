import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import styles from './NavBar.module.css';
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {
  
  return (
    <header>
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarTogglerDemo01'
            aria-controls='navbarTogglerDemo01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
            <Link className='navbar-brand' to='/'>
              <img className={styles.logo} alt='logo' />
            </Link>

            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' to='/'>
                  Inicio
                </Link>
              </li>

              <li className='nav-item'>
                <NavLink className='nav-link' to='/categoria/mugs'>
                  Mugs
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/categoria/dormitorio'>
                  Dormitorio
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/categoria/franelas'>
                  Franelas
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <CartWidget />
      </nav>
    </header>
  );
};

export default NavBar;
