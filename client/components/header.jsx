import React from 'react';

function Header(props) {
  return (
    <div className='container text-white bg-secondary d-flex justify-content-between'>
      <p className="pt-2 pb-2 pl-2">{props.text}</p>
      <p className="pt-2 pb-2 pl-2">{props.cartItemCount} Items <i className='fas fa-shopping-cart'></i></p>
    </div>
  );
}

export default Header;
