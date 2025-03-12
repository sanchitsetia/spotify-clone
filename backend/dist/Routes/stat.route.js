"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middleware/auth.middleware");
const stats_controller_1 = require("../controllers/stats.controller");
const router = (0, express_1.Router)();
// @ts-ignore
router.get("/", auth_middleware_1.protectRoute, auth_middleware_1.requireAdmin, stats_controller_1.getStats);
exports.default = router;
