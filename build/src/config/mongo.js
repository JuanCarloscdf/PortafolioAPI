"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conectToMongo = void 0;
const config_env_1 = require("../../config.env");
const mongoose_1 = __importDefault(require("mongoose"));
const URI = config_env_1.env.NODE_MODE === 'test' ? config_env_1.env.URI_TEST_MONGO : config_env_1.env.URI_MONGO;
console.log('env.NODE :>> ', URI);
const conectToMongo = async () => {
    try {
        const options = {
            authSource: 'admin'
        };
        await mongoose_1.default.connect(URI, options);
        console.log('🅲 🅾 🅽 🅽 🅴 🅲 🆃 🅴 🅳  🆃 🅾  🅼 🅾 🅽 🅶 🅾');
    }
    catch (error) {
        console.log(error);
    }
};
exports.conectToMongo = conectToMongo;
