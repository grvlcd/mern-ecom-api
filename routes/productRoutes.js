import express from 'express';
import products from '../data/products.js';

const productRouter = express.Router();

const productDatas = products;

productRouter.get('/', (req, res) => {
	res.json({
		'data': productDatas
	});
});

productRouter.get('/:id', (req, res) => {
	const { id } = req.params;
	const product = productDatas.find((product) => product._id === id);
	res.json({
		'data': product,
	})
});

export default productRouter;


