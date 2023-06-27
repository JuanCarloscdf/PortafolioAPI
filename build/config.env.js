"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
require("dotenv/config");
exports.env = {
    PORT: (_a = process.env.PORT) !== null && _a !== void 0 ? _a : '3200',
    URI_MONGO: (_b = process.env.URI_MONGO) !== null && _b !== void 0 ? _b : 'mongodb://user:password@localhost:27017/nodeApi',
    URI_TEST_MONGO: (_c = process.env.URI_TEST_MONGO) !== null && _c !== void 0 ? _c : 'mongodb://user:password@localhost:27017/test',
    NODE_MODE: (_d = process.env.NODE_MODE) !== null && _d !== void 0 ? _d : 'dev'
};
