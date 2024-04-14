import User from "../models/userModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

// DESC:	Get User Details
// ROUTE:	GET /api/user
// ACCESS:	Private (Authenticated User)
export const getUserProfile = asyncHandler(async (req, res) => {});

// DESC:	Update User Details
// ROUTE:	PUT /api/user
// ACCESS:	Private (Authenticated User)
export const updateUserProfile = asyncHandler(async (req, res) => {});
