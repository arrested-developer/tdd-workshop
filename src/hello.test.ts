class Product {
  id: number;
  stock: number;
  hold: number;

  constructor(id: number, stock: number) {
    this.id = id;
    this.stock = stock;
    this.hold = 0;
  }
}

describe("add item to order", () => {
  describe("sufficient product stock", () => {
    it("should create a new product", () => {
      const product = new Product(327, 7);
      expect(product.hold).toBe(0);
    });
  });
});


