import React from 'react';

function Header(props) {
  return (
    <div className=' text-white bg-secondary d-flex justify-content-between'>
      <p className="ml-5 mt-2 pt-2 pb-2 pl-2 pointer" onClick={() => { props.setView('catalog', {}); }}><i className="fas fa-shield-alt icon-5x mr-2"></i>{props.text}</p>
      <p onClick={() => { props.setView('cart', {}); }} className="mr-5 mt-2 pt-2 pb-2 pl-2 pointer">{props.cartItemCount} Items <i className='fas fa-shopping-cart'></i></p>
    </div>
  );
}

export default Header;
