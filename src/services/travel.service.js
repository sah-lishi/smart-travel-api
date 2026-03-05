import getAQIByCity from "../externalClients/aqi.client.js";
import getNewsByCity from "../externalClients/news.client.js";
import getTopAttractions from "../externalClients/places.client.js";
import getWeatherByCity from "../externalClients/weather.client.js"
import transformAQI from "../utils/transformers/aqi.transfromer.js";
import transformNews from "../utils/transformers/news.transformer.js";
import transformPlaces from "../utils/transformers/places.transformer.js";
import transformWeather from "../utils/transformers/weather.transformer.js";

const getTravelData = async (city) => {
    const [weatherResult, newsResult] = await Promise.allSettled([getWeatherByCity(city), getNewsByCity(city)])
    let latitude = weatherResult.value.coord.lat
    let longitude = weatherResult.value.coord.lon
    let weatherdata = null
    if(weatherResult.status === "fulfilled") {
        latitude = weatherResult.value.coord.lat
        longitude = weatherResult.value.coord.lon
        weatherdata = weatherResult.value
    }

    let newsData = null
    if(newsResult.status === "fulfilled")
        newsData = newsResult.value

    const [AQIResult, topAttractionsResult] = await Promise.allSettled([getAQIByCity(latitude, longitude), getTopAttractions(latitude, longitude)]) 
    let AQIResultData
    let topAttractionsResultData
    if(AQIResult.status === "fulfilled")
        AQIResultData = AQIResult.value

    if(topAttractionsResult.status === "fulfilled")
        topAttractionsResultData = topAttractionsResult.value
    
    return {
        city,
        weather: weatherdata 
            ? transformWeather(weatherdata)
            : "Weather data not available",
        topheadlines: newsData 
            ? transformNews(newsData)
            : "News not available",
        AQI: AQIResultData
            ? transformAQI(AQIResultData)
            : "AQI not available", 
        topPlaces: topAttractionsResultData
            ? transformPlaces(topAttractionsResultData)
            : "Top attractive places data not available"
    }
}

export default getTravelData