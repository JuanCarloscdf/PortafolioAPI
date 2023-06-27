"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (msg, res, error) => {
    res.status(500).json({
        message: msg,
        error
    });
};
exports.errorHandler = errorHandler;
