"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUserServ = exports.getUsersServ = exports.getUserServ = void 0;
const getUserServ = async () => {
    try {
        return 'getUserServ';
    }
    catch (error) {
        console.log('service error :>> ', error);
    }
};
exports.getUserServ = getUserServ;
const getUsersServ = async () => {
    try {
        return 'getUsersServ';
    }
    catch (error) {
        console.log('service error :>> ', error);
    }
};
exports.getUsersServ = getUsersServ;
const postUserServ = async () => {
    try {
        return 'postUserServ';
    }
    catch (error) {
        console.log('service error :>> ', error);
    }
};
exports.postUserServ = postUserServ;
