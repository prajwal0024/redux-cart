import React from 'react';
import './CartItem.css';
import { ReactComponent as RemoveIcon } from '../../assests/remove.svg';
import { ReactComponent as CounterIcon } from '../../assests/counter.svg';

const CartItem = () => {
  return (
    <div className='item'>
      <div className='item-body'>
        <div className='item-image-container'>
          <img
            src='/images/backpack-1.jpg'
            alt='backpack'
            className='item-image'
          />
        </div>
        <div className='item-content-container'>
          <div className='item-name-container'>
            <h2 className='item-name'>Blue 65 Litres Rucksack</h2>
            <p className='item-brand'>Impulse</p>
          </div>
          <div className='item-counter-container'>
            <CounterIcon className='item-counter-icon item-counter-icon-decrement ' />
            <p className='item-counter-count'>0</p>
            <CounterIcon className='item-counter-icon item-counter-icon-increment ' />
          </div>
          <p className='item-price-container'>
            Price:{' '}
            <strong>
              <span className='currency'>₹</span> 344
            </strong>
          </p>
          <p className='item-total-price-container'>
            Total:{' '}
            <strong>
              <span className='currency'>₹</span> 344
            </strong>
          </p>
        </div>
      </div>
      <RemoveIcon className='remove-icon' />
    </div>
  );
};

export default CartItem;
