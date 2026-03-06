import _config from "../config/index.js"
import fetchWithRetry from "../utils/httpClient.js";

const getNewsByCity = async (city) => {
    const url = `${_config.newsBaseUrl}/search`

    return await fetchWithRetry(url, {
        params: {
            q: city,
            apikey: _config.gNewsApiKey
        }
    })    
}

export default getNewsByCity