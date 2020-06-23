import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  let totalPrice = 0;
  for (let i = 0; i < props.cartItems.length; i++) {
    totalPrice += props.cartItems[i].price;
  }
  const priceString = totalPrice + '';
  const priceArray = priceString.split('');
  priceArray.splice(priceArray.length - 2, 0, '.');
  priceArray.splice(0, 0, '$');
  let result = '';
  for (let i = 0; i < priceArray.length; i++) {
    result += priceArray[i];
  }
  if (props.cartItems.length === 0) {
    return (
      <div className='container'>
        <div className='row'>
          <p className='pointer ml-2' onClick={() => { props.setView('catalog', {}); }}>&lt; Back to Catalog</p>
        </div>
        <div className='row ml-2'>
          <h1>My Cart</h1>
        </div>
        <div className='row ml-2'>
          Your cart is empty
        </div>
        <div className='row'>
          <p className='font-weight-bold ml-2'>Item Total $0.00</p>
        </div>
      </div>

    );
  } else {
    return (
      <div className='container'>
        <div className='row'>
          <p className='pointer ml-2' onClick={() => { props.setView('catalog', {}); }}>&lt; Back to Catalog</p>
        </div>
        <div className='row ml-2'>
          <h1>My Cart</h1>
        </div>
        <div className='row'>
          {
            props.cartItems.map(cartItem => {
              return (
                <CartSummaryItem removeFromCart={props.removeFromCart} key={cartItem.cartItemId} price={cartItem.price} source={cartItem.image} name={cartItem.name} text={cartItem.shortDescription} cartItemId={cartItem.cartItemId} ></CartSummaryItem>
              );
            })
          }

        </div>
        <div className='row d-flex justify-content-between mt-2 mb-2'>
          <p className='font-weight-bold ml-2'>Item Total {result}</p>
          <button onClick={() => { props.setView('checkout', {}); }} className='btn btn-primary mr-2'>Check Out</button>
        </div>
      </div>

    );
  }
}

export default CartSummary;
