import express from 'express';
import { getProductByid, getProducts } from '../controller/productController.js';

const productRouter = express.Router();

productRouter.get('/', getProducts);
productRouter.get('/:id', getProductByid);

export default productRouter;


