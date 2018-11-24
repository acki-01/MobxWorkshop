import React from 'react';
import ReactDom from 'react-dom';
import App from './containers/App';
import { configure, autorun } from 'mobx';
import productStore from './stores/productStore';

configure({ enforceActions: 'always' });
autorun(() => {
  const { products } = productStore;
  console.log(`Current products are: ${products.map(product => product.name)}`);
});

ReactDom.render(<App />, document.getElementById('root'));
