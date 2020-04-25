import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: { name: 'catalog', params: {} }
    };
    this.setView = this.setView.bind(this);
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  setView(name, params) {
    this.setState({
      view: { name: name, params: params }
    });
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div className='container'>
          <div className='row'><Header text={'$ Wicked Sales'}></Header></div>
          <div className='row'><ProductList setView={this.setView}></ProductList></div>
        </div>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <div className='container'>
          <div className='row'><Header text={'$ Wicked Sales'}></Header></div>
          <div className='row'><ProductDetails setView={this.setView} params={this.state.view.params}></ProductDetails></div>
        </div>
      );
    }
  }
}
