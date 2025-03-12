"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middleware/auth.middleware");
const users_controller_1 = require("../controllers/users.controller");
const router = (0, express_1.Router)();
// @ts-ignore
router.get("/", auth_middleware_1.protectRoute, users_controller_1.getAllUsers);
exports.default = router;
