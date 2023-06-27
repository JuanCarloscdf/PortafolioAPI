"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToRedis = void 0;
const redis_1 = require("redis");
const connectToRedis = async () => {
    try {
        const redisClient = (0, redis_1.createClient)({
            url: 'redis://default:yourpassword@localhost:6379'
        });
        redisClient.on('error', err => { console.log('Redis Client Error', err); });
        await redisClient.connect();
        console.log('🅒 🅞 🅝 🅝 🅔 🅒 🅣 🅔 🅓  🅣 🅞  🅡 🅔 🅓 🅘 🅢');
    }
    catch (error) {
        console.log(error);
    }
};
exports.connectToRedis = connectToRedis;
