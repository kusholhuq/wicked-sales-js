import React from 'react';

function Header(props) {
  return (
    <div className=' bg-secondary d-flex mt-1 mr-1 justify-content-between'>
      <h1 className="mb-4">{props.text}</h1>
    </div>
  );
}

export default Header;
