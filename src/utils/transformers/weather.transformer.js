const transformWeather = (weatherData) => {
    const tempKelvin = weatherData.main.temp
    
    return {
        temperatureCelsius: Math.round(tempKelvin - 273.15),
        humidity: weatherData.main.humidity,
        condition: weatherData.weather[0].description,
        windSpeed: weatherData.wind.speed
    }
}

export default transformWeather