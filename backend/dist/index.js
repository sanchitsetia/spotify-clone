"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_route_1 = __importDefault(require("./Routes/user.route"));
const admin_route_1 = __importDefault(require("./Routes/admin.route"));
const auth_route_1 = __importDefault(require("./Routes/auth.route"));
const song_route_1 = __importDefault(require("./Routes/song.route"));
const album_route_1 = __importDefault(require("./Routes/album.route"));
const stat_route_1 = __importDefault(require("./Routes/stat.route"));
const db_1 = __importDefault(require("./lib/db"));
dotenv_1.default.config();
const port = process.env.HTTP_PORT;
const app = (0, express_1.default)();
app.use("/api/users", user_route_1.default);
app.use("/api/admin", admin_route_1.default);
app.use("/api/auth", auth_route_1.default);
app.use("/api/songs", song_route_1.default);
app.use("/api/albums", album_route_1.default);
app.use("/api/stats", stat_route_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    (0, db_1.default)();
});
