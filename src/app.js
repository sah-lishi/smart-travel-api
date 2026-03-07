import express from "express"
import router from "./routes/travel.routes.js"
import rateLimit from "express-rate-limit"

const app = express()

app.use(express.json())

const rateLimit = rateLimit({
    window: 20 * 60 * 1000,
    max: 50,
    message: "Too many requests..."
})
app.use(rateLimit)
app.use("/", router)
export default app