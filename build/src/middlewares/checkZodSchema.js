"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkZodSchema = void 0;
const zod_1 = require("zod");
const checkZodSchema = (schema) => (req, res, next) => {
    try {
        /*     console.log('req.body :>> ', req.body) */
        schema.parse({
            body: req.body,
            params: req.params,
            query: req.query
        });
        next();
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            console.log('error.issues :>> ', error.issues);
            res.status(400).json(error.issues.map(item => item.message));
        }
        res.status(500).json({ message: 'internal server error' });
    }
};
exports.checkZodSchema = checkZodSchema;
