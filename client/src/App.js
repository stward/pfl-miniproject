import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Products from './containers/products'
import Product from './containers/product'

class App extends Component {
  render() {
    return(
      <div className='container'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Products} />
            <Route exact path='/products/:id' component={Product} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
