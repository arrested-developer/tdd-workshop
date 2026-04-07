import { Product } from "./product";

describe("add item to order", () => {
  describe("sufficient product stock", () => {
    it("should create a new product", () => {
      const product = new Product(327, 7);
      expect(product.hold).toBe(0);
    });
  });
});


