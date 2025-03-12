import {Router} from "express"
import { protectRoute } from "../middleware/auth.middleware"
import { getAllUsers } from "../controllers/users.controller"
const router = Router()

// @ts-ignore
router.get("/", protectRoute, getAllUsers)

export default router