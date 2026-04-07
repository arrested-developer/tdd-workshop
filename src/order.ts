import { OrderItem } from "./order-item";
import { Product } from "./product";

export class Order {
  list: OrderItem[] = [];

  add(product: Product, quantity: number) {
    product.hold = quantity;
    this.list.push({ 
      product,
      quantity
    });
  }
}
