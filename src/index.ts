import {
  map,
  every,
  filter,
  find,
  some,
  reject,
  forEach,
  reduce,
} from './modules';

class Collection {
  private items;

  constructor(items: Array<any> = []) {
    this.items = items;
  }

  map(callable: Function) {
    this.items = map(this.items, callable);
    return this; // return 自己這個 Collection 物件，以便我們可以做 chaining
  }

  every(callable: Function) {
    return every(this.items, callable);
  }

  filter(callable: Function) {
    this.items = filter(this.items, callable);
    return this;
  }

  find(callable: Function) {
    return find(this.items, callable);
  }

  some(callable: Function) {
    return some(this.items, callable);
  }

  reject(callable: Function) {
    this.items = reject(this.items, callable);
    return this;
  }

  forEach(callable: Function) {
    forEach(this.items, callable);
    return this;
  }

  reduce(callable: Function, initialValue: any = undefined) {
    return reduce(this.items, callable, initialValue);
  }

  size() {
    return this.items.length;
  }

  nth(index: number) {
    return this.items[index];
  }

  includes(callable: Function) {
    return this.some(callable);
  }

  toArray() {
    return this.items;
  }
}

// helper function
const collect = (items: Array<any>): Collection => new Collection(items);
export {
  collect,
};