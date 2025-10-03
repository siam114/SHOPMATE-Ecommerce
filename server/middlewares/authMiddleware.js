import jwt from "jsonwebtoken";
import ErrorHandler from "./errorMiddleware.js";
import { catchAsyncErrors } from ".catchAsyncError.js";
import database from "../database/db.js";

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
    const {token} = req.cookies;
    if(!token){
        return next(new ErrorHandler("Please login to access this resource",401));
    }
})