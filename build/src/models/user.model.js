"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String },
    password: { type: String },
    cellphone: { type: String }
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('User', userSchema);
