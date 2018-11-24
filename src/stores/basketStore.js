import { observable, action, computed } from 'mobx';

class BasketStore {
  @observable boughtProducts = [];
  @action buyProduct(product) {
    this.boughtProducts.push(product);
  }
}
export default new BasketStore();
