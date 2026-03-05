import getTravelData from "../services/travel.service.js"

const getTravelInfo = async (req, res) => {
    const city = req.query.city
    if(!city)
        return res.status(400).json({message: "City is required"})
    try {
        const data = await getTravelData(city)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message: "Internal server error"})
    }
}

export default getTravelInfo