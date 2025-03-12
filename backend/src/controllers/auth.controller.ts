import { User } from "../models/user.model";
import { NextFunction, Request, Response } from "express";

export const authCallback = async (req:Request, res:Response,next:NextFunction) => {
  try {
    const {id, firstName,lastName, imageUrl} = req.body;
    const user = await User.findOne({clerkId: id})
    if(!user){
      await User.create({clerkId: id, fullName: `${firstName} ${lastName}`, imageUrl})
    }
    res.status(200).json({message: "success"})    
  } catch (error) {
    console.log("Error in auth callback", error)
    next(error)
  }
}