import Product from "./models/Product";

const sampleProduct = new Product(
  "Wireless Mouse",
  "A high-precision wireless mouse",
  "electronics",
  49.99,
  10,
  4.2,
  200,
  ["electronics", "accessories"],
  "Logitech",
  "LM1234",
  0.2,
  { width: 5, height: 3, depth: 1.5 },
  "1-year warranty",
  "Ships in 24 hours",
  "In Stock",
  [
    {
      rating: 5,
      comment: "Amazing mouse!",
      date: "2024-12-01",
      reviewerName: "Alice",
      reviewerEmail: "alice@example.com",
    },
  ],
  "30-day return",
  1,
  {
    createdAt: "2024-01-01",
    updatedAt: "2024-06-01",
    barcode: "111222333",
    qrCode: "qrcode123",
  },
  "https://via.placeholder.com/150",
  ["https://via.placeholder.com/640x480"]
);

sampleProduct.displayDetails();
console.log("Price after discount:", sampleProduct.getPriceWithDiscount());