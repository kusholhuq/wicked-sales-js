import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      zip: null,
      method: '',
      creditCard: null,
      month: null,
      year: null,
      security: null,
      shippingAddress: ''
    };
    this.handleName = this.handleName.bind(this);
    this.handleCredit = this.handleCredit.bind(this);
    this.handleShipping = this.handleShipping.bind(this);
    this.isCheckoutButtonDisabled = this.isCheckoutButtonDisabled.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleAddress2 = this.handleAddress2.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleZip = this.handleZip.bind(this);
    this.handleMethod = this.handleMethod.bind(this);
    this.handleMonth = this.handleMonth.bind(this);
    this.handleYear = this.handleYear.bind(this);
    this.handleSecurity = this.handleSecurity.bind(this);

  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }

  handleAddress(event) {
    this.setState({ address: event.target.value });
  }

  handleAddress2(event) {
    this.setState({ address2: event.target.value });
  }

  handleCity(event) {
    this.setState({ city: event.target.value });
  }

  handleState(event) {
    this.setState({ state: event.target.value });
  }

  handleZip(event) {
    this.setState({ zip: event.target.value });
  }

  handleMethod(event) {
    this.setState({ method: event.target.value });
  }

  handleMonth(event) {
    this.setState({ month: event.target.value });
  }

  handleYear(event) {
    this.setState({ year: event.target.value });
  }

  handleSecurity(event) {
    this.setState({ security: event.target.value });
  }

  handleCredit(event) {
    this.setState({ creditCard: event.target.value });
  }

  handleShipping(event) {
    this.setState({ shippingAddress: event.target.value });
  }

  isCheckoutButtonDisabled() {
    if (this.state.name && this.state.shippingAddress && this.state.creditCard.length >= 16) {
      return false;
    } else {
      return true;
    }
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
        <h2 className='text-secondary'>Order Total: {result}</h2>
        <h4>Billing/Shipping</h4>
        <form onSubmit={() => { this.props.placeOrder(this.state); event.preventDefault(); }}>
          <div className='form-group mt-2 mb-2'>
            <p>First &amp; last name</p>
            <input type="text" className='form-control' id='name' onChange={this.handleName}/>
          </div>
          <div className='form-group mt-2 mb-2'>
            <p>Address</p>
            <input type="text" className='form-control' id='address' onChange={this.handleAddress} />
          </div>
          <div className='form-group mt-2 mb-2'>
            <p>Address 2</p>
            <input type="text" className='form-control' id='address2' onChange={this.handleAddress2} />
          </div>

          <div className=' d-flex flex-wrap col-sm-12 p-0'>
            <div className='col p-0'>
              <label className='m-0' htmlFor="city">City</label>
              <input required type="text" className='form-control mb-4' name='city' id='city' onChange={this.handleCity}/>
            </div>
            <div></div>
            <div></div>
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
            <p className='ml-2 pointer cart' onClick={() => { this.props.setView('catalog', {}); }}><i className="fa fa-arrow-circle-left" aria-hidden="true"></i> Continue Shopping</p>
            <button disabled={this.isCheckoutButtonDisabled()} type='submit' className='btn btn-primary mr-2'>Place Order</button>
          </div>
        </form>

      </div>
    );
  }
}

export default CheckoutForm;
