import React from 'react';

function ProductListItem(props) {
  const priceString = props.price + '';
  const priceArray = priceString.split('');
  priceArray.splice(priceArray.length - 2, 0, '.');
  priceArray.splice(0, 0, '$');
  let result = '';
  for (let i = 0; i < priceArray.length; i++) {
    result += priceArray[i];
  }

  return (
    <div className='card col-3-5 m-2 mt-3'>
      <img src={props.source} alt={props.alt} className=' card-img-top image-size'/>
      <div className='card-body'>
        <h5 className='card-title'>{props.title}</h5>
        <p className='text-grey'>{result}</p>
        <p className='card-text'>{props.text}</p>

      </div>
    </div>
  );
}

export default ProductListItem;
