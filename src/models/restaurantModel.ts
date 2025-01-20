import { Schema,model } from "mongoose";
import { RestaurantTypes } from "../types/Datatypes";


const restuarantSchema = new Schema<RestaurantTypes>({
    restaurantName:{
      type:String,
      required:true,
      trim :true
    } ,

    address:{
      type:String,
      required:true,
      trim:true
    }, 
    contactNo:{
        type:String,
        required:true
    },
    image:{
     type:String,
     required:true
    } 
},{timestamps:true})

const RestaurantModel = model<RestaurantTypes>('ResturantData',restuarantSchema)

export default RestaurantModel