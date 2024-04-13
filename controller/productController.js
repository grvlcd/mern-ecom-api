import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();

  res.json(products);
});

const getProductByid = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findOne({ _id: id });
  console.log(product);
  if (!product) {
    throw new Error("Resource not found");
  }

  res.json(product);
});

export { getProducts, getProductByid };
