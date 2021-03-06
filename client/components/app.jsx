import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';
import DisclaimerModal from './disclaimer-modal';
import Footer from './footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: { name: 'modal', params: {} },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
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

  removeFromCart(cartItem) {
    const options = {
      method: 'DELETE'
    };
    fetch(`/api/cartItems/${cartItem}`, options)
      .then(result => {
        if (result.ok) {
          const cart = this.state.cart.slice();
          for (let i = 0; i < cart.length; i++) {
            if (cart[i].cartItemId === cartItem) {
              cart.splice(i, 1);
              this.setState({ cart: cart });
            }
          }
        }
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
        <div>

          <div className=''><Header setView={this.setView} text={'METALOGY'} cartItemCount={this.state.cart.length}></Header></div>
          <div className='hero'></div>
          <div className='container'>
            <div className='row'><ProductList setView={this.setView}></ProductList></div>
          </div>
          <Footer text={'METALOGY'}/>
        </div>
      );
    } else if (this.state.view.name === 'modal') {
      return (
        <div>

          <div className=''><Header setView={this.setView} text={'METALOGY'} cartItemCount={this.state.cart.length}></Header></div>
          <div className='hero'></div>
          <div className='container'>
            <div className='row'><ProductList setView={this.setView}></ProductList></div>
          </div>
          <DisclaimerModal setView={this.setView}/>
          <Footer text={'METALOGY'}/>
        </div>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <div>
          <div className=''><Header setView={this.setView} text={'METALOGY'} cartItemCount={this.state.cart.length}></Header></div>
          <div className='container'>
            <div className='row'><ProductDetails setView={this.setView} params={this.state.view.params} addToCart={this.addToCart}></ProductDetails></div>
          </div>
          <Footer text={'METALOGY'} />
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <div>
          <div className=''><Header setView={this.setView} text={'METALOGY'} cartItemCount={this.state.cart.length}></Header></div>
          <div className='container'>
            <div className='row'><CartSummary removeFromCart={this.removeFromCart} cartItems={this.state.cart} setView={this.setView} params={this.state.view.params} addToCart={this.addToCart}></CartSummary></div>
          </div>
          <Footer text={'METALOGY'} />
        </div>
      );
    } else if (this.state.view.name === 'checkout') {
      return (
        <div>
          <div className=''><Header setView={this.setView} text={'METALOGY'} cartItemCount={this.state.cart.length}></Header></div>
          <div className='container'>
            <div className='row'><CheckoutForm placeOrder={this.placeOrder} cartItems={this.state.cart} setView={this.setView} params={this.state.view.params}></CheckoutForm></div>
          </div>
          <Footer text={'METALOGY'} />
        </div>
      );
    }
  }
}
