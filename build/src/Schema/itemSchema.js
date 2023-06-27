"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemZodSchema = void 0;
const zod_1 = require("zod");
exports.ItemZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().nonempty('name is required'),
        brand: zod_1.z.string().nonempty('brand is required'),
        price: zod_1.z.number().positive('price must be positive'),
        discount: zod_1.z.number().positive('price must be positive').min(0).max(100),
        images: zod_1.z.string().array(),
        createdBy: zod_1.z.string().nonempty().min(1)
    })
});
