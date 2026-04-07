import { OrderItem } from "./order-item";
import { Product } from "./product";

export class Order {
  list: OrderItem[] = [];

  add(product: Product, quantity: number) {
    if (quantity > product.stock) {
      throw new Error(
        "Insufficient stock of Ibanez Tube Screqamer. Only 1 currently available",
      );
    }
    product.hold = quantity;
    this.list.push({
      product,
      quantity,
    });
  }
}
