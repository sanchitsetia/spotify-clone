"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_2 = require("@clerk/express");
const user_route_1 = __importDefault(require("./Routes/user.route"));
const admin_route_1 = __importDefault(require("./Routes/admin.route"));
const auth_route_1 = __importDefault(require("./Routes/auth.route"));
const song_route_1 = __importDefault(require("./Routes/song.route"));
const album_route_1 = __importDefault(require("./Routes/album.route"));
const stat_route_1 = __importDefault(require("./Routes/stat.route"));
const db_1 = __importDefault(require("./lib/db"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const port = process.env.HTTP_PORT;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// const __dirname = path.resolve()
app.use((0, express_2.clerkMiddleware)());
app.use((0, express_fileupload_1.default)({
    useTempFiles: true,
    tempFileDir: path_1.default.join(__dirname, "tmp"),
    createParentPath: true,
    limits: {
        fileSize: 10 * 1024 * 1024
    },
}));
app.use("/api/users", user_route_1.default);
app.use("/api/admin", admin_route_1.default);
app.use("/api/auth", auth_route_1.default);
app.use("/api/songs", song_route_1.default);
app.use("/api/albums", album_route_1.default);
app.use("/api/stats", stat_route_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: process.env.NODE_ENV === "production" ? "Internal Server Error" : err.message });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    (0, db_1.default)();
});
