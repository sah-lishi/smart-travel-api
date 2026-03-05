import axios from "axios";
import _config from "../config/index.js"

const getWeatherByCity = async (city) => {
    try {
        const url = `${_config.weatherBaseUrl}/weather?q=${city}&appid=${_config.openWeatherApiKey}`
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.log("weather api error: ", error.response?.data || error.message);
        throw error
    }
}

export default getWeatherByCity