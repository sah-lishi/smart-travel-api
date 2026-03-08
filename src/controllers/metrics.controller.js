import ApiError from "../utils/ApiError.js"
import ApiResponse from "../utils/ApiResponse.js"
import { getMetrics } from "../utils/metrics.store.js"

const getMetricsDataController = (req, res) => {
    const metrics = getMetrics()
    if(!metrics)
        throw new ApiError(500, "Unable to fetch metrics")
    
    return res.status(200).json(new ApiResponse(metrics, "Metrics fetched successfully"))
}

export default getMetricsDataController