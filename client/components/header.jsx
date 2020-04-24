import React from 'react';

function Header(props) {
  return (
    <div className='container text-white bg-secondary '>
      <p className="pt-2 pb-2 pl-2">{props.text}</p>
    </div>
  );
}

export default Header;
