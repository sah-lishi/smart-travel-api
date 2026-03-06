import _config from "../config/index.js"
import fetchWithRetry from "../utils/httpClient.js";

const getTopAttractions = async (lat, lon) => {
    const url = `${_config.geoApifyBaseUrl}/places`
    
    return await fetchWithRetry(url, {
        params: {
            categories: "tourism.sights",
            filter: `circle:${lon},${lat},5000`,
            limit: 5,
            apiKey: _config.geoApifyKey
        }
    })
}

export default getTopAttractions