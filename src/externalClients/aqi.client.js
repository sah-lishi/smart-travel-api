import axios from "axios";
import _config from "../config/index.js"

const getAQIByCity = async (lat, lon) => {
    try {
        const url = `${_config.weatherBaseUrl}/air_pollution?lat=${lat}&lon=${lon}&appid=${_config.openWeatherApiKey}`
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.log("AQI api error: ", error.response?.data || error.message);
        throw error
    }
}

export default getAQIByCity