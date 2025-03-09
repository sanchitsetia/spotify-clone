import { clerkClient } from "@clerk/express";
import { Request,Response,NextFunction } from "express";

export const protectRoute = async (req:Request,res:Response,next:NextFunction)=>{
  try {
    // @ts-ignore
    if(!req.auth.userId){
      return res.status(401).json({message:"Unauthorized: User must be logged in"})
    }
    next()
  } catch (error) {
    console.log("Error in protect Route Middlware", error)
    return res.status(500).json({message:"Internal Server Error"})
  }
}

export const requireAdmin = async (req:Request,res:Response,next:NextFunction)=>{
  try {
    // @ts-ignore
    const currentUser = await clerkClient.users.getUser(req.auth.userId)
    const isAdmin = process.env.ADMIN_EMAILS?.split(",")?.includes(currentUser.primaryEmailAddress?.emailAddress as string)

    if(!isAdmin){
      return res.status(401).json({message:"Unauthorized: User must be an admin"})
    }
    next()
  } catch (error) {
    console.log("Error in requireAdmin middleware", error)
    return res.status(500).json({message:"Internal Server Error"})
  }
}