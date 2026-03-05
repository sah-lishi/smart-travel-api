import axios from "axios";
import _config from "../config/index.js"

const getNewsByCity = async (city) => {
    try {
        const url = `${_config.newsBaseUrl}/search?q=${city}&apikey=${_config.gNewsApiKey}`
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.log("News api error: ", error.response?.data || error.message);
        throw error
    }
}

export default getNewsByCity