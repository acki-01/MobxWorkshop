import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import ProductsList from './ProductsList';

@inject('productStore', 'basketStore')
@observer
class ProductsLists extends Component {
  componentDidMount() {
    this.props.productStore.getData();
  }
  onBuyHandler = id => {
    this.props.productStore.setId(id);
    const boughtProduct = this.props.productStore.boughtProduct;
    this.props.basketStore.buyProduct(boughtProduct);
  };
  sortByNameHandler = () => {
    this.props.productStore.sortByName();
  };
  onInputHandler = e => {
    this.props.productStore.onChangeFilterTerm(e.target.value);
  };
  sortByPriceHandler = () => {
    this.props.productStore.sortByPrice();
  };
  render() {
    const promotedList = this.props.productStore.filteredList.filter(
      ({ promoted }) => promoted
    );
    return (
      <>
        <input onChange={this.onInputHandler} />
        <button
          onClick={this.sortByNameHandler}
          style={{ marginRight: '10px' }}
        >
          Sort by name
        </button>
        <button onClick={this.sortByPriceHandler}>Sort by price</button>
        <ProductsList
          products={this.props.productStore.products}
          buyHandler={this.onBuyHandler}
          type={'All'}
        />
        <ProductsList
          products={promotedList}
          buyHandler={this.onBuyHandler}
          type={'Promoted'}
        />
      </>
    );
  }
}
export default ProductsLists;
