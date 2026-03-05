import dotenv from "dotenv"

dotenv.config()

const _config = {
    port: process.env.PORT || 8000,
    node_env: process.env.NODE_ENV || "development",
    openWeatherApiKey: process.env.OPENWEATHER_API_KEY,
    gNewsApiKey: process.env.GNEWS_API_KEY,
    geoApifyKey: process.env.GEOAPIFY_API_KEY,
    weatherBaseUrl: "https://api.openweathermap.org/data/2.5",
    newsBaseUrl: "https://gnews.io/api/v4",
    geoApifyBaseUrl: "https://api.geoapify.com/v2"
}

export default _config