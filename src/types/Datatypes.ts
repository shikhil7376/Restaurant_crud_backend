import mongoose from "mongoose";

 export interface RestaurantTypes extends Document {
      _id:mongoose.Schema.Types.ObjectId;
      restaurantName: string;
      address: string;
      contactNo: string;
      image: string;
 }