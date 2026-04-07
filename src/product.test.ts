import { Product } from "./product";

class Order {
  add(product: Product) {
    product.hold = 1;
  }
}

describe("add item to order", () => {
  describe("sufficient product stock", () => {
    it("should create a new product", () => {
      const product = new Product(327, 7);
      expect(product.hold).toBe(0);
    });

    it("adds product to order", () => {
      const product = new Product(327, 7);
      const order = new Order();
      order.add(product);
      expect(product.hold).toBe(1);
    });
  });
});
