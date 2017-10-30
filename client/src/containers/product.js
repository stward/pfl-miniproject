import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'

class Product extends Component {
  state = {
    product: undefined,
    productPrice: undefined,
    orderNumber: undefined
  }

  componentDidMount() {
    fetch(this.props.match.url)
      .then(res => res.json())
      .then(product => this.setState({product}))
  }

  handleFieldChange = (field, value) => {
    let newState = {}
    newState[field] = value
    this.setState(newState)
  }

  onSubmit = () => {
    var that = this
    $.ajax({
      url: '/order',
      method: 'POST',
      data: this.state
    }).done(function(data) {
      console.log(data)
      that.setState({orderNumber: data})
    })
  }

  render() {
    console.log(this.state)
    let product = this.state.product
    return (
      <div>
        <div className='nav'>
          <Link to={'/'}><i className="fa fa-home fa-3x" aria-hidden="true" /></Link>
        </div>
        <Link to={'/'}><h1><img src='../pfl-logo.png' alt='Printing For Less' /></h1></Link>
        {product ?
          <div id={product.id}>
            <h2>{product.name}</h2>
            <img src={product.imageURL} alt={product.name} className='featuredImage' />
            <h3>Order Options</h3>
            <fieldset className="form-group">
              {product.deliveredPrices.map(p =>
                <div className='form-check'>
                  <label className='form-check-label'>
                    <input type='radio' className='form-check-input' value={p.deliveryMethodCode} name='delivery' onChange={e => this.handleFieldChange('name', e.target.value)} />
                    {p.description}
                  </label>
                </div>
              )}
              {/* <button onClick={this.onSubmit}>Clicky</button> */}
              <div>{this.state.orderNumber}</div>
              <h4>{this.state.price}</h4>
            </fieldset>
          </div>
        : <img src='../triangles.svg' alt='loading' />}
      </div>
    );
  }
}

export default Product
