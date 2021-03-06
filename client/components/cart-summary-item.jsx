import React from 'react';

function CartSummaryItem(props) {
  const priceString = props.price + '';
  const priceArray = priceString.split('');
  priceArray.splice(priceArray.length - 2, 0, '.');
  priceArray.splice(0, 0, '$');
  let result = '';
  for (let i = 0; i < priceArray.length; i++) {
    result += priceArray[i];
  }

  return (
    <div className='card col-12 m-2'>
      <div className='card-body d-flex'>
        <img src={props.source} className='col-4 image-size'/>
        <div>
          <h5 className='card-title'>{props.name}</h5>
          <p className='text-grey'>{result}</p>
          <p className='card-text'>{props.text}</p>
          <button type="button" className="btn btn-danger" onClick={() => {
            props.getRemovedItemDetails(props);
          }}>Remove</button>
        </div>
      </div>

    </div>
  );
}

export default CartSummaryItem;
