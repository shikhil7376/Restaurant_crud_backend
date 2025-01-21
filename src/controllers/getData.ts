import { Request,Response,NextFunction } from "express";
import asyncErrorHandler from "../utils/asyncHandler";
import RestaurantModel from "../models/restaurantModel";
import { BadRequestError } from "../utils/errorTypes";
import { StatusCodes } from "http-status-codes";


export const getData = asyncErrorHandler(
    async(req:Request,res:Response,next:NextFunction)=>{
      
        const page = parseInt(req.query.page as string) || 1; // default page is 1
        const limit = parseInt(req.query.limit as string) || 10;
  
        const totalCount = await RestaurantModel.countDocuments()
        
        const details = await RestaurantModel.find()
        .skip((page - 1) * limit) // Skip records based on current page
        .limit(limit) // Limit the number of records returned
        .sort({ order: 1 }); //

        const data = details.map((detail) => ({
            id: detail._id,
            restaurantName: detail.restaurantName,
            contactNo: detail.contactNo,
            image: detail. image,
          }));

          if(!data){
            throw new BadRequestError("No Data Found!!")
          }

          return res.status(StatusCodes.OK).json({
            data,
            pagination: {
              currentPage: page,
              totalPages: Math.ceil(totalCount / limit), 
              totalCount,
          }
          })
    }
)