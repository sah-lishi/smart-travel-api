import express from "express"
import travelRoute from "./routes/travel.routes.js"
import metricRouter from "./routes/metrics.route.js"
import rateLimit from "express-rate-limit"

const app = express()

app.use(express.json())

app.use(rateLimit({
    windowMs: 20 * 60 * 1000,
    max: 50,
    message: "Too many requests..."
}))
app.use("/api/v1/travel", travelRoute)
app.use("/api/v1/metrics", metricRouter)

export default app