import getAQIByCity from "../externalClients/aqi.client.js";
import getNewsByCity from "../externalClients/news.client.js";
import getTopAttractions from "../externalClients/places.client.js";
import getWeatherByCity from "../externalClients/weather.client.js"

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
            ? {
                temperature: weatherdata.main.temp,
                humidity: weatherdata.main.humidity
            } 
            : "Weather data not available",
        topheadlines: newsData 
            ? newsData.articles.slice(0,5) 
            : "News not available",
        AQI: AQIResultData
            ? AQIResultData.list[0].main
            : "AQI not available", 
        topPlaces: topAttractionsResultData
            ? topAttractionsResultData.features.map(place => ({
            name: place.properties.name || "Unnamed place",
            address: place.properties.formatted,
            category: place.properties.categories[0]
            }))
            : "Top attractive places data not available"
    }
}

export default getTravelData