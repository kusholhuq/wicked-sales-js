import React from 'react';

class RemoveModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className='backdrop d-flex'>
        <div className='modal-contents m-auto bg-white border rounded mt-5 p-3'>
          <h3>Product title from props</h3>
          <img src="" alt="image from props"/>
          <p>Are you sure you want to remove this item from your cart?</p>
          <div className='d-flex btn-group w-75 justify-content-around'>
            <button className='btn btn-secondary'>Cancel</button>
            <button className='btn btn-danger'>Remove</button>
          </div>
        </div>
      </div>
    );

  }
}

export default RemoveModal;
