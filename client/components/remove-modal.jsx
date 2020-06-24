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
          <h3>{this.props.removedItem.title}</h3>
          <img src={`${this.props.removedItem.image}`} alt="image from props"/>
          <p>Are you sure you want to remove this item from your cart?</p>
          <div className='d-flex btn-group w-75 justify-content-around'>
            <button className='btn btn-secondary' onClick={this.props.closeModal}>Cancel</button>
            <button className='btn btn-danger' onClick={() => {
              this.props.removeFromCart(this.props.removedItem.cartItemId);
              this.props.closeModal();
            }}>Remove</button>
          </div>
        </div>
      </div>
    );

  }
}

export default RemoveModal;
