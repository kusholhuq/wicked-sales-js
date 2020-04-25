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
        console.log(json);
        this.setState({
          product: json
        });
      });
  }

  render() {
    const priceString = this.state.product.price + '';
    const priceArray = priceString.split('');
    priceArray.splice(priceArray.length - 2, 0, '.');
    priceArray.splice(0, 0, '$');
    let result = '';
    for (let i = 0; i < priceArray.length; i++) {
      result += priceArray[i];
    }

    return (
      <div className='container'>
        <div className='row'>
          <div className='card'>
            <div className='card-body'>
              <img src={this.state.product.image} />
              <div>
                <h5 className='card-title'>{this.state.product.name}</h5>
                <p className='text-grey'>{result}</p>
              </div>
            </div>
            <p className='card-text'>{this.state.product.longDescription}</p>

          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
