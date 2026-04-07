import { Product } from "./product";
import { Order } from "./order";

describe("add item to order", () => {
  describe("sufficient product stock", () => {
    it("should create a new product", () => {
      const product = new Product(327, 7);
      expect(product.hold).toBe(0);
    });

    it("adds product to order", () => {
      const product = new Product(327, 7);
      const order = new Order();
      order.add(product, 1);
      expect(product.hold).toBe(1);
    });

    it("adds product to order list", () => {
      const product = new Product(327, 7);
      const order = new Order();
      order.add(product, 1);
      expect(order.list.length).toBe(1);

      const orderItem = order.list[0];
      expect(orderItem?.quantity).toBe(1);
      expect(orderItem?.product).toBe(product);
    });

    it("should update the existing hold quantity when adding the same product", () => {
      const product = new Product(327, 7);
      const order = new Order();
      order.add(product, 2);
      expect(order.list.length).toBe(1);

      const orderItem = order.list[0];
      expect(orderItem?.quantity).toBe(2);
      expect(orderItem?.product).toBe(product);
      expect(product.hold).toBe(2);
    });
  });
});
