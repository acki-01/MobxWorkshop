import { observable, action, computed, runInAction } from 'mobx';

class ProductStore {
  @observable products = [];
  @observable filterTermValue = '';
  isSortedGrowing = true;
  id = 0;

  @action setId(id) {
    const boughtProduct = this.products.find(product => product.id === id);
    this.id = id;
    boughtProduct.isSold = true;
  }
  @computed get boughtProduct() {
    return this.products.find(product => product.id === this.id);
  }

  @action onChangeFilterTerm(val) {
    this.filterTermValue = val;
  }

  @computed get filteredList() {
    return this.products.filter(
      product =>
        product.name
          .toLowerCase()
          .search(this.filterTermValue.toLowerCase()) !== -1
    );
  }

  @action sortByPrice() {
    let sorted;
    if (this.isSortedGrowing) {
      sorted = this.products.sort((a, b) => a.price - b.price);
    } else {
      sorted = this.products.sort((a, b) => b.price - a.price);
    }
    this.isSortedGrowing = !this.isSortedGrowing;
    this.products = sorted;
  }

  @action sortByName() {
    let sorted;
    if (!this.isSortedGrowing) {
      sorted = this.products.sort((a, b) =>
        ('' + a.name).localeCompare(b.name)
      );
    } else {
      sorted = this.products.sort((a, b) =>
        ('' + b.name).localeCompare(a.name)
      );
    }
    this.isSortedGrowing = !this.isSortedGrowing;
    this.products = sorted;
  }
  fetchData() {
    return new Promise(res =>
      res([
        { id: 1, name: 'Apple', promoted: false, isSold: false, price: 13 },
        { id: 2, name: 'Coffee', promoted: false, isSold: false, price: 40 },
        { id: 3, name: 'Orange', promoted: true, isSold: false, price: 20 },
        { id: 4, name: 'Pear', promoted: true, isSold: false, price: 5 },
        { id: 5, name: 'Cucumber', promoted: true, isSold: false, price: 4 }
      ])
    );
  }
  @action async getData() {
    try {
      const response = await this.fetchData();
      runInAction(() => {
        this.products = response;
      });
    } catch (err) {
      console.log(err);
    }
  }
}
export default new ProductStore();
