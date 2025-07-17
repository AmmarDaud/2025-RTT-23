import express from "express";
import Product from "../models/product.js";

const router = express.Router();

// create a new product
router.post("/", async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (e) {
    console.error(e);
    res.status(400).json({ error: e.message });
  }
});

// get a product by the id
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
});

// delete a product
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    res.json(deletedProduct);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Not Found" });
  }
});

// update a product
router.patch("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedProduct);
  } catch (error) {
    console(error);
    res.status(404).json({ message: "Not Found" });
  }
});

// get all products
router.get("/", async (req, res) => {
  // get the query values
  const { category, price, sortBy, minPrice, maxPrice } = req.query;
  let { page, limit } = req.query;

  // create a query object for the db
  const query = {};
  const sort = {};

  // check if category query was sent
  if (category) {
    // add it to the query object
    query.category = { $eq: category };
  }

  if (price) {
    query.price = { $lte: price };
  }

  if (minPrice) {
    query.price = { $gte: minPrice };
  }

  if (maxPrice) {
    query.price = { $lte: maxPrice };
  }

  if (sortBy) {
    const [price, value] = sortBy.split("_");
    sort.price = value === "asc" ? 1 : -1;
  }

  console.log("QUERY OBJ: ", query);
  console.log("SORT OBJ: ", sort);

  if (!page) {
    page = 1;
  }

  if (!limit) {
    limit = 10;
  }

  console.log("PAGE: ", page);
  console.log("LIMIT: ", limit);

  try {
    const products = await Product.find(query)
      .select({ __v: 0, _id: 0 })
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(limit);

    const totalDocs = await Product.countDocuments(query);
    const totalPages = Math.ceil(totalDocs / limit);

    console.log("TOTAL DOCS: ", totalDocs);
    console.log("TOTAL PAGES: ", totalPages);

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
});

// Add sample products to database
router.get("/db/seed", async (req, res) => {
  try {
    await Product.deleteMany({});

    const sampleProducts = [
      { name: "Wireless Mouse", price: 25.99, category: "Electronics" },
      { name: "Bluetooth Speaker", price: 49.99, category: "Electronics" },
      { name: "Yoga Mat", price: 19.99, category: "Fitness" },
      { name: "Running Shoes", price: 89.99, category: "Footwear" },
      { name: "Coffee Maker", price: 39.99, category: "Kitchen" },
      { name: "Notebook Pack", price: 12.99, category: "Stationery" },
      { name: "Desk Lamp", price: 22.99, category: "Home" },
      { name: "Water Bottle", price: 9.99, category: "Fitness" },
      { name: "Backpack", price: 34.99, category: "Accessories" },
      { name: "Smartwatch", price: 129.99, category: "Electronics" },
    ];

    const createdProducts = await Product.insertMany(sampleProducts);
    res
      .status(201)
      .json({ message: "Seed successful", products: createdProducts });
  } catch (error) {
    res.status(500).json({ message: "Seed failed", error: error.message });
  }
});

export default router;