"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controller_1 = require("../controllers/admin.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = (0, express_1.Router)();
// @ts-ignore
router.use(auth_middleware_1.protectRoute, auth_middleware_1.requireAdmin);
router.get("/check", admin_controller_1.checkAdmin);
// @ts-ignore
router.post("/songs", admin_controller_1.createSong);
router.delete("songs/:id", admin_controller_1.deleteSong);
router.post("/albums", admin_controller_1.createAlbum);
router.delete("/albums/:id", admin_controller_1.deleteAlbum);
exports.default = router;
