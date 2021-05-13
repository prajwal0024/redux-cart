import React from 'react';
import './CartContainer.css';
import data from '../../data';
import CartItem from '../CartItem/CartItem';

const CartContainer = () => {
  return (
    <div className='cart-container'>
      {data.map((data) => (
        <CartItem data={data} />
      ))}
    </div>
  );
};

export default CartContainer;
