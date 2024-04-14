import User from "../models/userModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

// DESC:	Login User / Generate Cookie
// ROUTE:  	POST /api/auth/login
// ACCESS:	Public
export const loginUser = asyncHandler(async (req, res) => {});

// DESC:	Register User
// ROUTE:	POST /api/auth/register
// ACCESS:	Public
export const registerUser = asyncHandler(async (req, res) => {});

// DESC:	Logout User / Clear Cookie
// ROUTE:	POST /api/auth/logout
// ACCESS:	Private (Authenticated User)
export const logoutUser = asyncHandler(async (req, res) => {});
