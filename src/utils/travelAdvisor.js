const generateTravelRecommendation = (weatherData, aqiData) => {
    const recommendation = []

    if(typeof aqiData !== "object" || typeof weatherData !== "object")
        return "Travel recommendation not available"
    
    if(weatherData.temperatureCelsius && weatherData.temperatureCelsius > 35)
        recommendation.push("Temperature is very high. Avoid travel in afternoon.")

    if(weatherData.condition && weatherData.condition.toLowerCase().includes("rain"))
        recommendation.push("Rain expected. Carry umbrella.")

    if(aqiData.index && aqiData.index >= 4)
        recommendation.push("Air quality is poor. Avoid outdoor sightseeing.")

    if(recommendation.length === 0)
        recommendation.push("Weather condition looks good for exploring the city.")

    return recommendation
}

export default generateTravelRecommendation