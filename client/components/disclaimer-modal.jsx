import React from 'react';

class DisclaimerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ checked: event.target.value });
  }

  handleSubmit(event) {
    this.props.setView('catalog', {});
    event.preventDefault();
  }

  render() {

    return (
      <div className='backdrop d-flex'>
        <div className='modal-contents m-auto bg-white border rounded mt-5 p-3'>
          <h2 className='text-center'>Welcome to METALOGY!</h2>
          <p>Please note that this website is a content management application
            created for the purpose of demonstration. Check the box below to acknowledge
            that the merchandise shown here is not available for purchase, that
            you will not provide genuine financial or personal information, and
            that you are aware no purchase will truly be processed. </p>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input type="checkbox" onChange={this.handleChange} className='form-check-input ml-1' id='acknowledgement' required/>
            </div>
            <div>
              <label htmlFor="acknowledgement" className='form-check-label ml-4 mb-3'>I acknowledge
              that this is strictly a demo application.</label>
            </div>
            <div className='btn-group w-100 p-1'>
              <button className='btn btn-danger w-100'>Proceed</button>
            </div>
          </form>
        </div>

      </div>
    );
  }
}
export default DisclaimerModal;
