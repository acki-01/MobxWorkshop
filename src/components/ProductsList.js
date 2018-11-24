import React from 'react';

import Product from './Product';
import { observer } from 'mobx-react';

const ProductsList = ({ products, buyHandler, type }) => (
  <>
    <h3>{type} Products</h3>
    {products.map(({ id, name, price, isSold }) => (
      <Product
        type={name}
        key={id}
        price={price}
        id={id}
        buyHandler={buyHandler}
        isSold={isSold}
      />
    ))}
  </>
);

export default observer(ProductsList);
