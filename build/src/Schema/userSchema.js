"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userZodSchema = void 0;
const zod_1 = require("zod");
exports.userZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        first_name: zod_1.z.string().nonempty('first name is required').min(2),
        last_name: zod_1.z.string().nonempty('last name is required'),
        email: zod_1.z.string().nonempty('email is required').email('type a correct email'),
        password: zod_1.z.string().nonempty('password is required').min(6, 'password too short'),
        cellphone: zod_1.z.string().nonempty('cellphone is required')
    })
});
