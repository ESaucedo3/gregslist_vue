export class House {
  constructor(data) {
    this.id = data.id;
    this.bathrooms = data.bathrooms;
    this.bedrooms = data.bedrooms;
    this.createdAt = new Date(data.createdAt);
    this.updatedAt = new Date(data.updatedAt);
    this.creator = data.creator;
    this.description = data.description;
    this.imgUrl = data.imgUrl;
    this.levels = data.levels;
    this.price = data.price;
    this.year = data.year;
  }

  get priceAsCurrency() {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(this.price);
  }
}
