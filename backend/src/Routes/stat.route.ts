import {Router} from "express"
import { protectRoute, requireAdmin } from "../middleware/auth.middleware"
import { getStats } from "../controllers/stats.controller"

const router = Router()

// @ts-ignore
router.get("/",protectRoute,requireAdmin,getStats)

export default router