import User from "../models/userModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

// DESC:	Get All Users
// ROUTE:	GET /api/admin/users
// ACCESS:	Private (Authenticated Admin User)
export const getUsers = asyncHandler(async (req, res) => {});

// DESC:	Get User By Id
// ROUTE:	GET /api/admin/users/:id
// ACCESS:	Private (Authenticated Admin User)
export const getUserById = asyncHandler(async (req, res) => {});

// DESC:	Update User By Id
// ROUTE:	PUT /api/admin/users/:id
// ACCESS:	Private (Authenticated Admin User)
export const updateUserById = asyncHandler(async (req, res) => {});

// DESC:	Delete uers
// ROUTE:	DELETE /api/admin/users/:id
// ACCESS:	Private (Authenticated Admin User)
export const deleteUser = asyncHandler(async (req, res) => {});
