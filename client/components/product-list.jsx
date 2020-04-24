import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products')
      .then(res => res.json())
      .then(json => {

        this.setState({ products: json });
      });

  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          {
            this.state.products.map(product => {
              return (
                <ProductListItem key={this.state.products.productId} source={this.state.products.image} alt={this.state.products.shortDescription} title={this.state.products.name} price={this.state.products.price} text={this.state.products.shortDescription}></ProductListItem>
              );
            })

          }
        </div>
      </div>
    );
  }
}
export default ProductList;
