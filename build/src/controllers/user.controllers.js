"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUser = exports.getUsers = exports.getUser = void 0;
const serviceFn = __importStar(require("../services/user.services"));
const error_handler_1 = require("../utils/error.handler");
const getUser = async (req, res) => {
    try {
        const serviceResponse = await serviceFn.getUserServ();
        res.send(serviceResponse);
    }
    catch (error) {
        (0, error_handler_1.errorHandler)('error geting user', res, error);
    }
};
exports.getUser = getUser;
const getUsers = async (req, res) => {
    try {
        const serviceResponse = await serviceFn.getUsersServ();
        res.send(serviceResponse);
    }
    catch (error) {
        (0, error_handler_1.errorHandler)('error geting users', res, error);
    }
};
exports.getUsers = getUsers;
const postUser = async (req, res) => {
    try {
        const serviceResponse = await serviceFn.postUserServ();
        res.send(serviceResponse);
    }
    catch (error) {
        (0, error_handler_1.errorHandler)('error adding user', res, error);
    }
};
exports.postUser = postUser;
