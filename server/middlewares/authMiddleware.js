import jwt from "jsonwebtoken";
import ErrorHandler from "./errorMiddleware.js";
import { catchAsyncErrors } from ".catchAsyncError.js";
import database from "../database/db.js";

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {})