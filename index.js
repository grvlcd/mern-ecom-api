import express from 'express';
import productRoutes from './routes/productRoutes.js';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use('/products', productRoutes);

app.listen(PORT, (req, res) => {
	console.log(`SERVER RUNNING ON ${PORT}`);
});
