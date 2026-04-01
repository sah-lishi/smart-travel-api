import express from "express"
import travelRoute from "./routes/travel.routes.js"
import metricRouter from "./routes/metrics.route.js"
import rateLimit from "express-rate-limit"
import _config from "./config/index.js"
import swaggerUi from "swagger-ui-express"
import swaggerSpec from "./config/swagger.js"

const app = express()

app.use(express.json())

app.use(rateLimit({
    windowMs: 20 * 60 * 1000,
    max: 50,
    message: "Too many requests..."
}))

app.use("/api/v1/travel", travelRoute)
app.use("/api/v1/metrics", metricRouter)
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    swaggerOptions: {
        withCredentials: true
    }
}))

app.use((err, req, res, next) => {
    if(err.message === "city not found") {
        return res.status(404).json({
            success: false,
            message: err.message
        })
    }

    return res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal server error",
        stack: _config.node_env === "production" ? undefined : err.stack
    })
})

export default app