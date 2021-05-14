import React from 'react';
import './CartContainer.css';
import CartItem from '../CartItem/CartItem';
import { useSelector } from 'react-redux';

const CartContainer = () => {
  const { data: products } = useSelector((state) => state.cartReducer);
  return (
    <div className='cart-container'>
      {products.length > 0 ? (
        products.map((product) => (
          <CartItem
            key={product.id}
            itemId={product.id}
            name={product.name}
            brand={product.brand}
            price={product.price}
            image={product.image}
            quantity={product.quantity}
          />
        ))
      ) : (
        <p className='empty-text'>Your cart is empty</p>
      )}
    </div>
  );
};

export default CartContainer;
