import React from 'react';

function ProductListItem(props) {
  return (
    <div className='card' style={'width: 18rem;'}>
      <img src={props.source} alt={props.alt}/>
      <div className='card-body'>
        <h5 className='card-title'>{props.title}</h5>
        <p className='text-grey'>{props.price}</p>
        <p className='card-text'>{props.text}</p>

      </div>
    </div>
  );
}

export default ProductListItem;
