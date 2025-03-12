"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middleware/auth.middleware");
const songs_controller_1 = require("../controllers/songs.controller");
const router = (0, express_1.Router)();
// @ts-ignore
router.get("/", auth_middleware_1.protectRoute, auth_middleware_1.requireAdmin, songs_controller_1.getAllSongs);
router.get("/featured", songs_controller_1.getFeaturedSongs);
router.get("/made-for-you", songs_controller_1.getMadeForYouSongs);
router.get("/trending", songs_controller_1.getTrendingSongs);
exports.default = router;
