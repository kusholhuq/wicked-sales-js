import React from 'react';

function DisclaimerModal(props) {
  let className = null;
  if (props.acknowledged === false) {
    className = 'display-modal';
  } else {
    className = 'display-none';
  }

  return (
    <div className={`disclaimer-modal-container ${className} justify-content-center align-items-center`}>
      <div className='pb-4 d-flex justify-content-center flex-column align-content-around room-closed-modal shadow'>
        <div className='match-icon'>

        </div>
        <p className='text-center lead'> sorry this room has been closed</p>
        <button type='button' onClick={props.hideDisclaimerModal} className='btn shadow-sm align-self-center'>Ok</button>
      </div>

    </div>
  );

}
export default DisclaimerModal;
