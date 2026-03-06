import _config from "../config/index.js"
import fetchWithRetry from "../utils/httpClient.js";

const getWeatherByCity = async (city) => {
    const url = `${_config.weatherBaseUrl}/weather`

    return fetchWithRetry(url, {
        params: {
            q: city,
            appid: _config.openWeatherApiKey
        }
    })
}

export default getWeatherByCity