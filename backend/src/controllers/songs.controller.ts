
import {Request, Response, NextFunction} from "express"
import { Song } from "../models/song.model"
export const getAllSongs = async (req:Request,res:Response,next:NextFunction)=>{
try {
  const songs = await Song.find()
  res.status(200).json(songs)  
} catch (error) {
 console.log("Error in getAllSongs", error)
 next(error) 
}
}

export const getFeaturedSongs = async (req:Request,res:Response,next:NextFunction)=> {
  try {
    const featuredSongs = await Song.aggregate([
      {$sample: {size: 6}},
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          audioUrl: 1
        }
      }
    ])
    res.status(200).json(featuredSongs)
    
  } catch (error) {
    console.log("Error in getFeaturedSongs", error)
    next(error)
  }
}

export const getMadeForYouSongs = async (req:Request,res:Response,next:NextFunction)=> {
  try {
    const featuredSongs = await Song.aggregate([
      {$sample: {size: 4}},
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          audioUrl: 1
        }
      }
    ])
    res.status(200).json(featuredSongs)
    
  } catch (error) {
    console.log("Error in getMadeForYouSongs", error)
    next(error)
  }
}

export const getTrendingSongs = async (req:Request,res:Response,next:NextFunction)=> {
  try {
    const featuredSongs = await Song.aggregate([
      {$sample: {size: 4}},
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          audioUrl: 1
        }
      }
    ])
    res.status(200).json(featuredSongs)
    
  } catch (error) {
    console.log("Error in getTrendingSongs", error)
    next(error)
  }
} 