import { Request,Response,NextFunction } from "express";
import asyncErrorHandler from "../utils/asyncHandler";
import RestaurantModel from "../models/restaurantModel";
import { BadRequestError } from "../utils/errorTypes";
import { StatusCodes } from "http-status-codes";


export const addRestaurantDetails = asyncErrorHandler(
    async(req:Request,res:Response,next:NextFunction)=>{
        const { restaurantName, address, contactNo, image } = req.body;
       console.log('body',req.body)
       
        if (!restaurantName || !address || !contactNo || !image) {
           throw new BadRequestError("All fields is required")
          }

          if (!/^\d{10}$/.test(contactNo)) {
            throw new BadRequestError("Invalid contact number format")
          }

          const newRestaurant = new RestaurantModel({
            restaurantName,
            address,
            contactNo,
            image,
          });

          const savedRestaurant = await newRestaurant.save();
        res.status(StatusCodes.OK).json({success:true,message:"Restaurant added succesfully",data:savedRestaurant})
    }
)