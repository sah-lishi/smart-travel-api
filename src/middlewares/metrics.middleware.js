import { incrementTotalRequests, incrementtotalResponseTime } from "../utils/metrics.store.js"

const metricMiddleware = (req, res, next) => {
    const start = Date.now()
    incrementTotalRequests()

    res.on("finish", () => {
        const responseTime = Date.now() - start
        incrementtotalResponseTime(responseTime)
    })

    next()
}

export default metricMiddleware