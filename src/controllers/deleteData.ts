import asyncErrorHandler from "../utils/asyncHandler";
import { Request,Response,NextFunction } from "express";
import { BadRequestError,ProjectNotFoundError } from "../utils/errorTypes";
import RestaurantModel from "../models/restaurantModel";
import { StatusCodes } from "http-status-codes";


export const deleteData = asyncErrorHandler(
    async(req:Request,res:Response,next:NextFunction)=>{

     const { id } = req.params       
     if(!id){
        throw new BadRequestError("userid and id are required!!")
     }
   const deleteData = await RestaurantModel.deleteOne({_id:id})
     if(!deleteData.deletedCount){
        throw new ProjectNotFoundError("Item not found or already deleted")
     }        
     return res.status(StatusCodes.OK).json({success:true,message:"Item deleted succesfully"})
    }
)