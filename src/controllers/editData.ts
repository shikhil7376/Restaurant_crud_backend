import asyncErrorHandler from "../utils/asyncHandler";
import { Request,Response,NextFunction } from "express";
import { BadRequestError,ProjectNotFoundError } from "../utils/errorTypes";
import RestaurantModel from "../models/restaurantModel";
import { StatusCodes } from "http-status-codes";


export const editData = asyncErrorHandler(
    async(req:Request,res:Response,next:NextFunction)=>{
       const{id,restaurantName,contactNo,image,address} = req.body
       if(!id){
          throw new BadRequestError('post id is required')
       }
       const updateItem = await RestaurantModel.findByIdAndUpdate(
          id,
          {restaurantName,contactNo,image,address},
          { new: true, runValidators: true }
       )
       if(!updateItem){
        throw new ProjectNotFoundError("Item is not found")
    }
    res.status(StatusCodes.OK).json({success:true,message:"data updated succesfully"})

    }
)