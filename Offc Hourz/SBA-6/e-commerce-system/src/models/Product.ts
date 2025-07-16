import { dimensions, meta, reviews } from "../types/product-types";

export default class Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: reviews;
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: meta;
  thumbnail: string;
  images: string[];

  constructor(
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: string[],
    brand: string,
    sku: string,
    weight: number,
    dimensions: dimensions,
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    reviews: reviews,
    returnPolicy: string,
    minimumOrderQuantity: number,
    meta: meta,
    thumbnail: string,
    images: string[],
  ) {
    this.id = Math.random() * 1000000 + 1;
    this.title = title;
    this.description = description;
    this.category = category;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.rating = rating;
    this.stock = stock;
    this.tags = tags;
    this.brand = brand;
    this.sku = sku;
    this.weight = weight;
    this.dimensions = dimensions;
    this.warrantyInformation = warrantyInformation;
    this.shippingInformation = shippingInformation;
    this.availabilityStatus = availabilityStatus;
    this.reviews = reviews;
    this.returnPolicy = returnPolicy;
    this.minimumOrderQuantity = minimumOrderQuantity;
    this.meta = meta;
    this.thumbnail = thumbnail;
    this.images = images;
  }

  displayDetails() {
    // Todo: implement method
  }

  getPriceWithDiscount() {
    // Todo: implement method
  }
}

const product = new Product(
  "Sample Product",
  "This is a sample product",
  "Sample Category",
  99.99,
  10,
  4.5,
  100,
  ["tag1", "tag2"],
  "Sample Brand",
  "SKU12345",
  1.5,
  { width: 10, height: 20, depth: 5 },
  "2 years warranty",
  "Ships in 3-5 days",
  "In Stock",
  [
    {
      rating: 5,
      comment: "Great product!",
      date: "2023-06-01",
      reviewerName: "Jeff Besos",
      reviewerEmail: "jeff@aws.com",
    },
  ],
  "30-day return policy",
  1,
  {
    createdAt: "2024-01-01",
    updatedAt: "2024-06-01",
    barcode: "123456789",
    qrCode: "qrcode123",
  },
  "https://via.placeholder.com/150",
  [
    "https://via.placeholder.com/640x480",
    "https://via.placeholder.com/640x480/2",
  ],
);
console.log(product);