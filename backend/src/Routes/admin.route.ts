import { Router } from "express";
import { checkAdmin, createAlbum, createSong, deleteAlbum, deleteSong } from "../controllers/admin.controller";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware";

const router = Router();

// @ts-ignore
router.use(protectRoute,requireAdmin)


router.get("/check",checkAdmin)
// @ts-ignore
router.post("/songs",createSong)
router.delete("songs/:id",deleteSong)
router.post("/albums",createAlbum)
router.delete("/albums/:id",deleteAlbum)

export default router