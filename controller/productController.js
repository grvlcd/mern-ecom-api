import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// DESC:     Get products
// ROUTE:    GET /api/products
// ACCESS:   Public
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();

  res.json(products);
});

// DESC:     Get product by id
// ROUTE:    GET /api/product/:id
// ACCESS:   Public
export const getProductByid = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await Product.findOne({ _id: id });

  if (!product) {
    throw new Error("Resource not found");
  }

  res.json(product);
});
