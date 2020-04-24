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
        console.log(json);
        this.setState({ products: json });
      });

  }

  render() {
    return (

      <div className='container'>
        <div className='row justify-content-around'>
          {
            this.state.products.map(product => {
              return (
                <ProductListItem key={product.productId} source={product.image} alt={product.shortDescription} title={product.name} price={product.price} text={product.shortDescription}></ProductListItem>
              );
            })

          }
        </div>
      </div>

    );
  }
}
export default ProductList;
