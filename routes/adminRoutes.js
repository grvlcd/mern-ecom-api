import express from "express";
import {
  deleteUser,
  getUserById,
  getUsers,
  updateUserById,
} from "../controller/adminController.js";

const adminRoutes = express.Router();

adminRoutes.get("/admin/users", getUsers);
adminRoutes.get("/admin/users", getUserById);
adminRoutes.put("/admin/users", updateUserById);
adminRoutes.delete("/admin/users/:id", deleteUser);

export default adminRoutes;
