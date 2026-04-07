import { Product } from "./product";

export class Order {
  add(product: Product) {
    product.hold = 1;
  }
}
