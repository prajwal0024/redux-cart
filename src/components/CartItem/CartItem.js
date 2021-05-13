import React from 'react';
import './CartItem.css';
import { ReactComponent as RemoveIcon } from '../../assests/remove.svg';
import { ReactComponent as CounterIcon } from '../../assests/counter.svg';

const CartItem = ({ name, brand, price, image, quantity }) => {
  return (
    <div className='item'>
      <div className='item-body'>
        <div className='item-image-container'>
          <img src={image} alt='backpack' className='item-image' />
        </div>
        <div className='item-content-container'>
          <div className='item-name-container'>
            <h2 className='item-name'>{name}</h2>
            <p className='item-brand'>{brand}</p>
          </div>
          <div className='item-counter-container'>
            <CounterIcon className='item-counter-icon item-counter-icon-decrement ' />
            <p className='item-counter-count'>{quantity}</p>
            <CounterIcon className='item-counter-icon item-counter-icon-increment ' />
          </div>
          <p className='item-price-container'>
            Price:{' '}
            <strong>
              <span className='currency'>₹</span> {price}
            </strong>
          </p>
          <p className='item-total-price-container'>
            Total:{' '}
            <strong>
              <span className='currency'>₹</span> {price * quantity}
            </strong>
          </p>
        </div>
      </div>
      <RemoveIcon className='remove-icon' />
    </div>
  );
};

export default CartItem;
