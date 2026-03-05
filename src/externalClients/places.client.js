import axios from "axios";
import _config from "../config/index.js"

const getTopAttractions = async (lat, lon) => {
    try {
        const url = `${_config.geoApifyBaseUrl}/places`
        const response = await axios.get(url, {params: {
            categories: "tourism.sights",
            filter: `circle:${lon},${lat},5000`,
            limit: 5,
            apiKey: _config.geoApifyKey
        }})
        return response.data
    } catch (error) {
        console.log("Geoapify api error: ", error.response?.data || error.message);
        throw error
    }
}

export default getTopAttractions