import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {

    fetch(`/api/products/${this.props.params.productId}`)
      .then(res => res.json())
      .then(json => {

        this.setState({
          product: json
        });
      });
  }

  render() {

    if (this.state.product === null) {
      return null;
    } else {
      const priceString = this.state.product.price + '';
      const priceArray = priceString.split('');
      priceArray.splice(priceArray.length - 2, 0, '.');
      priceArray.splice(0, 0, '$');
      let result = '';
      for (let i = 0; i < priceArray.length; i++) {
        result += priceArray[i];
      }
      return (
        <div className='container mt-5'>
          <div className='row'>
            <div className='card'>
              <p className='pointer ml-2 cart' onClick={() => { this.props.setView('catalog', {}); }}><i className="fa fa-arrow-circle-left" aria-hidden="true"></i> Back to catalog</p>
              <div className='card-body d-flex'>
                <img src={this.state.product.image} className='col-5 image-size-detail' />
                <div className='ml-2 col-5'>
                  <h5 className='card-title'>{this.state.product.name}</h5>
                  <p className='text-grey'>{result}</p>
                  <p className='card-text'>{this.state.product.shortDescription}</p>
                  <p><button onClick={() => { this.props.addToCart(this.state.product); }} type='button' className='btn btn-primary'>Add to Cart</button></p>
                </div>
              </div>
              <p className='card-text m-3'>{this.state.product.longDescription}</p>

            </div>
          </div>
        </div>
      );
    }
  }
}

export default ProductDetails;
