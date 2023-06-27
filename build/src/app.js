"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_env_1 = require("../config.env");
const express_1 = __importDefault(require("express"));
const mongo_1 = require("./config/mongo");
const redis_1 = require("./config/redis");
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const swagger_1 = require("./config/swagger");
// import routes
const user_routes_1 = require("./routes/user.routes");
// conenct to databases
void (0, redis_1.connectToRedis)();
void (0, mongo_1.conectToMongo)();
// express config
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
// routes
app.use(user_routes_1.router);
// listenner
app.listen(config_env_1.env.PORT, () => {
    console.log(`listening on port ${config_env_1.env.PORT}`);
    (0, swagger_1.swaggerDocs)(app);
});
