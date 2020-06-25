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
      <div className='container col-10'>
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
            <div className='col p-0 mx-3'>
              <label htmlFor="state" className='m-0'>State</label>
              <select
                required
                className="custom-select mb-4"
                name="state"
                id="state"
                onChange={this.handleState}>
                <option value=''>Select a state</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="IllinoisIndiana">IllinoisIndiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="MontanaNebraska">MontanaNebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="PennsylvaniaRhode Island">PennsylvaniaRhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
              </select>
            </div>
            <div className='col p-0'>
              <label htmlFor="zip" className='m-0'>Zip Code</label>
              <input type="number" required maxLength='5' minLength='5' className='form-control mb-4 col' name='zip' id='zip' onChange={this.handleZip}/>
            </div>
          </div>

          <h4>Payment Method</h4>
          <div className='custom-flex flex-wrap align-items-center justify-content-between border rounded px-4 py-3 mb-3 col'>
            <div>
              <input type="radio" required name='method' className='mr-2'/>
              <label htmlFor="method" className='m-0'>Credit Card</label>
            </div>
            <div className='col-6 custom-flex justify-content-center align-item-center'>
              <img src="/images/credit-cards.png" alt="credit cards" className='img-fluid'/>

            </div>

          </div>
          <div className='form-group mt-2 mb-2'>
            <p>Card Number</p>
            <input required minLength='16' maxLength='16' type="text" className='form-control' id='creditCard' onChange={this.handleCredit}/>
          </div>

          <div className='d-flex flex-wrap'>
            <div className='d-flex flex-wrap col-sm-12 p-0'>
              <label htmlFor="month" className='col-12 p-0'>Expiration Date</label>
              <div className='col-6 pl-0'>
                <select
                  required
                  className="custom-select mb-4"
                  name="month"
                  id="month"
                  onChange={this.handleMonth}>
                  <option value=""> Month </option>
                  <option value="01"> 01 </option>
                  <option value="02"> 02 </option>
                  <option value="03"> 03 </option>
                  <option value="04"> 04 </option>
                  <option value="05"> 05 </option>
                  <option value="06"> 06 </option>
                  <option value="07"> 07 </option>
                  <option value="08"> 08 </option>
                  <option value="09"> 09 </option>
                  <option value="10"> 10 </option>
                  <option value="11"> 11 </option>
                  <option value="12"> 12 </option>
                </select>

              </div>
            </div>

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
