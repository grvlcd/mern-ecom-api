import express from "express";
import {
  getUserProfile,
  updateUserProfile,
} from "../controller/userController.js";

const userRoutes = express.Router();

userRoutes.get("/user", getUserProfile);

userRoutes.put("/user/", updateUserProfile);

export default userRoutes;
