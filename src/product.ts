export class Product {
    id: number;
    stock: number;
    hold: number;
  
    constructor(id: number, stock: number) {
      this.id = id;
      this.stock = stock;
      this.hold = 0;
    }
}
