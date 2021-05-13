import React from 'react';
import './CartContainer.css';
import CartItem from '../CartItem/CartItem';

const CartContainer = ({ products }) => {
  return (
    <div className='cart-container'>
      {products.map((product) => (
        <CartItem
          key={product.id}
          name={product.name}
          brand={product.brand}
          price={product.price}
          image={product.image}
          quantity={product.quantity}
        />
      ))}
    </div>
  );
};

export default CartContainer;
