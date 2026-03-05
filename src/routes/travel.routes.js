import express from "express"
import getTravelInfo from "../controllers/travel.controller.js"

const router = express.Router()

router.get("/travel", getTravelInfo)

export default router