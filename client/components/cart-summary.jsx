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

  return (
    <div className='container'>
      <div className='row'>
        {
          props.cartItems.map(cartItem => {
            return (
              <CartSummaryItem key={cartItem.cartItemId} price={cartItem.price} source={cartItem.image} name={cartItem.name} text={cartItem.shortDescription}></CartSummaryItem>
            );
          })
        }

      </div>
      <div className='row'>
        <p className='bold'>Item Total {result}</p>
      </div>
    </div>

  );

}

export default CartSummary;
