import React from 'react';

import { observer } from 'mobx-react';

const Product = ({ type, isSold, buyHandler, id, price }) => {
  const onBuyHandler = id => {
    buyHandler(id);
  };
  return (
    <div style={{ display: 'flex' }}>
      <li style={{ textDecoration: isSold ? 'line-through' : 'none' }}>
        {type}
      </li>
      <span style={{ marginLeft: '10px' }}>Price: {price}</span>
      <button style={{ marginLeft: '10px' }} onClick={() => onBuyHandler(id)}>
        BUY
      </button>
    </div>
  );
};

export default observer(Product);
