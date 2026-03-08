import getAQIByCity from "../externalClients/aqi.client.js";
import getNewsByCity from "../externalClients/news.client.js";
import getTopAttractions from "../externalClients/places.client.js";
import getWeatherByCity from "../externalClients/weather.client.js"
import generateTravelRecommendation from "../utils/travelAdvisor.js";
import transformAQI from "../utils/transformers/aqi.transfromer.js";
import transformNews from "../utils/transformers/news.transformer.js";
import transformPlaces from "../utils/transformers/places.transformer.js";
import transformWeather from "../utils/transformers/weather.transformer.js";
import {getCache, setCache} from "../cache/memory.cache.js"
import { incrementcacheHits, incrementcacheMisses } from "../utils/metrics.store.js";

const getTravelData = async (city) => {
    const key = `travel:${city}`
    const cachedData = getCache(key)
    if(cachedData) {
        incrementcacheHits()
        return cachedData
    }

    incrementcacheMisses()

    const [weatherResult, newsResult] = await Promise.allSettled([getWeatherByCity(city), getNewsByCity(city)])
    let latitude = null
    let longitude = null
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
    let AQIResultData = null
    let topAttractionsResultData = null
    if(AQIResult.status === "fulfilled")
        AQIResultData = AQIResult.value
    
    if(topAttractionsResult.status === "fulfilled")
        topAttractionsResultData = topAttractionsResult.value
     
    // Transform data
    const weather = weatherdata 
        ? transformWeather(weatherdata)
        : "Weather data not available"

    const topHeadlines = newsData 
        ? transformNews(newsData)
        : "News not available"

    const AQI = AQIResultData
        ? transformAQI(AQIResultData)
        : "AQI not available" 
    
    const topPlaces = topAttractionsResultData
        ? transformPlaces(topAttractionsResultData)
        : "Top attractive places data not available"     
        
    // console.log("Wether: ", weather, "topHead: ", topHeadlines, "Aqi:", AQI, "places: ", topPlaces);
    const recommendation = generateTravelRecommendation(weather, AQI)
    // console.log(recommendation);

    const response = {
        city,
        weather,
        topHeadlines,
        AQI, 
        topPlaces,
        recommendation
    }

    setCache(key, response, 15 * 60 * 1000)
    
    return response
}

export default getTravelData