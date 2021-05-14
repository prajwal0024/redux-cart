import React from 'react';
import './Footer.css';

import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../actions/cartActions';

const Footer = () => {
  const dispatch = useDispatch();
  const { subTotal, data } = useSelector((state) => state.cartReducer);
  return (
    <footer className='footer'>
      {data.length > 0 && (
        <div className='container footer-container'>
          <p
            className='footer-text-clear'
            onClick={() => dispatch(clearCart())}
          >
            clear cart
          </p>

          <p>
            subtotal{' '}
            <strong>
              <span className='currency'>₹</span>
              {subTotal}
            </strong>
          </p>
        </div>
      )}
    </footer>
  );
};

export default Footer;
