import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: { name: 'catalog', params: {} },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
    this.getCartItems();
  }

  setView(name, params) {
    this.setState({
      view: { name: name, params: params }
    });
  }

  getCartItems() {
    fetch('/api/cart')
      .then(res => res.json())
      .then(json => this.setState({ cart: json }));
  }

  addToCart(product) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    };
    fetch('/api/cart', options)
      .then(res => res.json())
      .then(json => {
        this.setState({
          cart: [...this.state.cart, json]
        });
      })
      .catch(err => console.error(err));
  }

  placeOrder(order) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    };
    fetch('/api/orders', options)
      .then(res => res.json())
      .then(json => {
        this.setState({
          cart: [],
          view: { name: 'catalog', params: {} }
        });
      });
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div className='container'>
          <div className='row'><Header setView={this.setView} text={'$ Wicked Sales'} cartItemCount={this.state.cart.length}></Header></div>
          <div className='row'><ProductList setView={this.setView}></ProductList></div>
        </div>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <div className='container'>
          <div className='row'><Header setView={this.setView} text={'$ Wicked Sales'} cartItemCount={this.state.cart.length}></Header></div>
          <div className='row'><ProductDetails setView={this.setView} params={this.state.view.params} addToCart={this.addToCart}></ProductDetails></div>
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <div className='container'>
          <div className='row'><Header setView={this.setView} text={'$ Wicked Sales'} cartItemCount={this.state.cart.length}></Header></div>
          <div className='row'><CartSummary cartItems={this.state.cart} setView={this.setView} params={this.state.view.params} addToCart={this.addToCart}></CartSummary></div>
        </div>
      );
    }
  }
}
