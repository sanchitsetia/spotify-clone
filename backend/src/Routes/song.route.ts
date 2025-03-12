import {Router} from "express"
import { protectRoute, requireAdmin } from "../middleware/auth.middleware"
import { getAllSongs, getFeaturedSongs, getMadeForYouSongs, getTrendingSongs } from "../controllers/songs.controller"
const router = Router()

// @ts-ignore
router.get("/",protectRoute,requireAdmin,getAllSongs)
router.get("/featured",getFeaturedSongs)
router.get("/made-for-you",getMadeForYouSongs)
router.get("/trending",getTrendingSongs)

export default router