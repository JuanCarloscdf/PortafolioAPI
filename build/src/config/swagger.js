"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDocs = void 0;
const config_env_1 = require("../../config.env");
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'ts mongo node js API',
        version: '1.0.0'
    },
    servers: [
        {
            url: `http://localhost:${config_env_1.env.PORT}`
        }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT'
            }
        },
        schemas: {
            user: {
                type: 'object',
                required: ['first_name', 'last_name', 'email', 'cellphone', 'password'],
                properties: {
                    first_name: { type: 'string' },
                    last_name: { type: 'string' },
                    email: { type: 'string' },
                    cellphone: { type: 'string' },
                    password: { type: 'string' }
                }
            },
            item: {
                type: 'object',
                required: ['brand', 'categories', 'name', 'price', 'discount', 'created_by', 'collection'],
                properties: {
                    name: { type: 'string' },
                    created_by: { type: 'string' },
                    brand: { type: 'string' },
                    price: { type: 'number' },
                    discount: { type: 'number' },
                    collection: { type: 'array' },
                    categories: { type: 'array' }
                }
            }
        }
    },
    security: [
        {
            bearerAuth: []
        }
    ]
};
const swaggerOptions = {
    swaggerDefinition,
    apis: ['./src/routes/*.ts']
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(swaggerOptions);
const swaggerDocs = (app) => {
    // swaguer page
    app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
    // swaguer in JSON format
    app.get('/docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
    console.log(`🅳 🅾 🅲 🆂  🅰 🆅 🅰 🅸 🅻 🅰 🅱 🅻 🅴  🅰 🆃    http://localhost:${config_env_1.env.PORT}/docs`);
};
exports.swaggerDocs = swaggerDocs;
