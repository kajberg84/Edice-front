class Product {
  constructor(id, title, description, material, price, img, quantity) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.material = material;
    this.price = price;
    this.img = img;
    this.quantity = quantity;
  }
}

const product1 = new Product(
  1,
  "Raspberry Liquorice",
  "Set of seven dice for role playing. These delicious looking dice are not edible.",
  "Resin",
  19,
  "/images/product_raspberryliquorice_dice.jpg",
  1
);
const product2 = new Product(
  2,
  "Green Swirl",
  "Set of seven dice for role playing. Roll for poison damage.",
  "Resin",
  29,
  "/images/product_green_dice.jpg",
  1
);
const product3 = new Product(
  3,
  "Bubblegum",
  "Set of seven dice for role playing. For the bubbly player.",
  "Metal",
  39,
  "/images/product_bubblegum_dice.jpg",
  1
);
const product4 = new Product(
  4,
  "Rainbow",
  "Set of seven dice for role playing. These colorful dice lets you roll with pride!",
  "Resin",
  29,
  "/images/product_rainbow_dice.jpg",
  1
);

export const products = [product1, product2, product3, product4];
