import express from "express"
import getTravelInfo from "../controllers/travel.controller.js"
import metricMiddleware from "../middlewares/metrics.middleware.js"

const router = express.Router()

router.route("/").get(metricMiddleware, getTravelInfo)

export default router