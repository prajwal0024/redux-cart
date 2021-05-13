import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container footer-container'>
        <p className='footer-text-clear'>clear cart</p>
        <p>
          subtotal{' '}
          <strong>
            <span className='currency'>₹</span>2123
          </strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
