import _config from "../config/index.js"
import fetchWithRetry from "../utils/httpClient.js";

const getAQIByCity = async (lat, lon) => {
    const url = `${_config.weatherBaseUrl}/air_pollution`

    return await fetchWithRetry(url, {
        params: {
            lat: lat,
            lon: lon,
            appid: _config.openWeatherApiKey
        }
    })
}

export default getAQIByCity