import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Smart Travel API",
            version: "1.0.0",
            description: "REST API for travel platforms."
        },
        servers: [
            {
                url: "",
                description: "Production server"
            },
            {
                url: "http://localhost:8000/api/v1",
                description: "Development server"
            },
        ],
    },
    apis: ["./src/routes/*.js", "./src/docs/*.js"]
}

const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec