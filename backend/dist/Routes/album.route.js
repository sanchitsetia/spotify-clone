"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const albums_controller_1 = require("../controllers/albums.controller");
const router = (0, express_1.Router)();
router.get("/", albums_controller_1.getAllAlbums);
router.get("/:albumId", albums_controller_1.getAlbumById);
exports.default = router;
