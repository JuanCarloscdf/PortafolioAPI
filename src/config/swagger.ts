import { env } from '../../config.env'
import { type Express, type Request, type Response } from 'express'
import swaggerJSDoc, { type OAS3Definition, type OAS3Options } from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const swaggerDefinition: OAS3Definition = {
  openapi: '3.0.0',
  info: {
    title: 'ts mongo node js API',
    version: '1.0.0'
  },
  servers: [
    {
      url: `http://localhost:${env.PORT}`
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
}

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ['./src/routes/*.ts']
}

const swaggerSpec = swaggerJSDoc(swaggerOptions)

const swaggerDocs = (app: Express): void => {
  // swaguer page
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  // swaguer in JSON format
  app.get('/docs.json', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })
  console.log(`🅳 🅾 🅲 🆂  🅰 🆅 🅰 🅸 🅻 🅰 🅱 🅻 🅴  🅰 🆃    http://localhost:${env.PORT}/docs`)
}

export { swaggerDocs }
