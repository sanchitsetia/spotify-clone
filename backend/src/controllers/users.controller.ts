
import {Request,Response,NextFunction} from "express"
import { User } from "../models/user.model"
export const getAllUsers = async (req:Request,res:Response,next:NextFunction)=>{
  try {
    // @ts-ignore
    const currentUserId = req.auth.userId
    const users = await User.find({clerkId:{$ne:currentUserId}})
    res.status(200).json(users)    
  } catch (error) {
    console.log("Error in getAllUsers", error)
    next(error)
  }

}