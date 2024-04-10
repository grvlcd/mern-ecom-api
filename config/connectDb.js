import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const MONGODB_URL = process.env.MONGODB_URL;

export const connectDb = async () => {
	try {
		const con = await mongoose.connect(MONGODB_URL);
		console.log(`CONNECTED TO ${con.connection.host}`);
	} catch (error) {
		console.log(error);
	}
}
