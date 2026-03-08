import getTravelData from "../services/travel.service.js"
import ApiError from "../utils/ApiError.js"
import ApiResponse from "../utils/ApiResponse.js"
import asyncHandler from "../utils/asyncHandler.js"

const getTravelInfo = asyncHandler( async (req, res) => {
    const city = req.query.city
    if(!city || city.trim() === "")
        throw new ApiError(400, "City name is required.")
   
    const data = await getTravelData(city)
    if(!data)
        throw new ApiError(500, "Unable to fetch travel info due to inetrnal server error")
    
    return res.status(200).json(new ApiResponse(data, "Travel info fetched successfully"))
})


export default getTravelInfo