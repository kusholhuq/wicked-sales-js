import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: null,
      shippingAddress: ''
    };
    this.handleName = this.handleName.bind(this);
    this.handleCredit = this.handleCredit.bind(this);
    this.handleShipping = this.handleShipping.bind(this);
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }

  handleCredit(event) {
    this.setState({ creditCard: event.target.value });
  }

  handleShipping(event) {
    this.setState({ shippingAddress: event.target.value });
  }

  render() {

    let totalPrice = 0;
    for (let i = 0; i < this.props.cartItems.length; i++) {
      totalPrice += this.props.cartItems[i].price;
    }
    const priceString = totalPrice + '';
    const priceArray = priceString.split('');
    priceArray.splice(priceArray.length - 2, 0, '.');
    priceArray.splice(0, 0, '$');
    let result = '';
    for (let i = 0; i < priceArray.length; i++) {
      result += priceArray[i];
    }

    return (
      <div className='container'>
        <h1>My Cart</h1>
        <p>Order Total: {result}</p>
        <form onSubmit={() => { this.props.placeOrder(this.state); }}>
          <div className='form-group mt-2 mb-2'>
            <p>Name</p>
            <input type="text" className='form-control' id='name' onChange={this.handleName}/>

          </div>
          <div className='form-group mt-2 mb-2'>
            <p>Credit Card</p>
            <input type="number" className='form-control' id='creditCard' onChange={this.handleCredit}/>

          </div>
          <div className='form-group mt-2 mb-2'>
            <p>Shipping Address</p>
            <textarea className='form-control' name="shippingAddress" id="shippingAddress" cols="30" rows="10" onChange={this.handleShipping}></textarea>

          </div>
          <div className='row d-flex justify-content-between mt-2 mb-2'>
            <p onClick={() => { this.props.setView('catalog', {}); }}>&lt; Continue Shopping</p>
            <button type='submit' className='btn btn-primary'>Place Order</button>
          </div>
        </form>

      </div>
    );
  }
}

export default CheckoutForm;
