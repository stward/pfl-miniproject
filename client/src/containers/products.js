import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Products extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    fetch('/products')
      .then(res => res.json())
      .then(products => this.setState({products}))
  }

  render() {
    return (
      <div>
        <h1><img src='../pfl-logo.png' alt='Printing For Less' /></h1>
        <div className='productContainer'>
          {this.state.products.data ?
            this.state.products.data.map(p =>
              <div key={p.id}>
                <Link to={'/products/' + p.id}>
                  <img src={p.imageURL} alt={p.name} />
                  <div>{p.name}</div>
                </Link>
              </div>
            )
          : <img src='../triangles.svg' alt='loading' />}
        </div>
      </div>
    );
  }
}

export default Products
