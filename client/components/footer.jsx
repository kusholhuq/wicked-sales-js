import React from 'react';

function Footer(props) {
  return (
    <div className='mt-5'>
      <div className='text-white bg-secondary d-flex justify-content-around'>
        <h4 className=" mt-2 pt-5"><i className="fas fa-shield-alt icon-5x mr-2"></i>{props.text}</h4>
      </div>
      <div className='text-white bg-secondary d-flex justify-content-around'>
        <p className='mb-3 pb-5'>Sustainable Art to make your Home Unique</p>
      </div>
    </div>
  );
}

export default Footer;
