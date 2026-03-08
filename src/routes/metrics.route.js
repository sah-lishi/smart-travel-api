import express from "express"
import getMetricsDataController from "../controllers/metrics.controller.js"

const router = express.Router()
router.route("/").get(getMetricsDataController)

export default router