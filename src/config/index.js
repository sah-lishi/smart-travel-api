import dotenv from "dotenv"

dotenv.config()

const _config = {
    port: process.env.PORT || 8000,
    node_env: process.env.NODE_ENV || "development",
    openWeatherApiKey: process.env.OPENWEATHER_API_KEY,
    gNewsApiKey: process.env.GNEWS_API_KEY,
    geoApifyKey: process.env.GEOAPIFY_API_KEY,
    weatherBaseUrl: process.env.WEATHER_BASE_URL,
    newsBaseUrl: process.env.NEWS_BASE_URL,
    geoApifyBaseUrl: process.env.GEOAPIFY_BASE_URL
}

export default _config