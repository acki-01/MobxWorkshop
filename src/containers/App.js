import React, { Component } from 'react';
import ProductsLists from '../components/ProductsLists';
import { Provider } from 'mobx-react';
import productStore from '../stores/productStore';
import basketStore from '../stores/basketStore';
import DevTools from 'mobx-react-devtools';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Product List</h1>
        <Provider productStore={productStore} basketStore={basketStore}>
          <ProductsLists />
        </Provider>
        <DevTools />
      </div>
    );
  }
}
export default App;
