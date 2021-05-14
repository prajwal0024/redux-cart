import React from 'react';
import { ReactComponent as CartIcon } from '../../assests/shopping-cart.svg';
import './Navbar.css';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const {
    cartReducer: { totalItems },
  } = useSelector((state) => state);

  return (
    <nav className='nav'>
      <div className='container nav-container'>
        <p className='logo'>Redux Cart</p>
        <div className='icon-container'>
          <CartIcon className='cart-icon' />
          <p className='nav-count'>{totalItems}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
