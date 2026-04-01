# Smart Travel API

A REST API that aggregates real-time travel information for any city — including weather, top places, local news headlines, and air quality index — powered by multiple external APIs.

The API also exposes a metrics endpoint for monitoring performance and external API usage.

This project is deployed on Render.

## Tech Stack

- Node.js
- Express.js
- Axios (HTTP client for external APIs)
- Express Rate Limit
- Swagger UI (API Documentation)
- Custom In-Memory Metrics Store

## External APIs

- [OpenWeatherMap](https://openweathermap.org/api) — Weather data and Air Quality Index
- [GNews](https://gnews.io/) — Top local news headlines
- [Geoapify](https://www.geoapify.com/) — Top places and landmarks

## Features

### Travel Info
- Real-time weather (temperature, humidity, wind speed, condition)
- Air Quality Index (AQI level)
- Top local news headlines
- Top places and landmarks
- Smart travel recommendation based on weather condition

### Metrics
- Total API requests
- External API call count
- External API failure count
- Average response time
- Cache hits and misses

### Other
- In-memory caching for external API responses
- Rate limiting
- Swagger UI documentation

## Live API

Base URL: `https://smart-travel-api.onrender.com/api/v1`

API Docs: `https://smart-travel-api.onrender.com/api/v1/docs`

Public Endpoints:
- `GET /travel?city=cityName`
- `GET /metrics`

## API Endpoints

### Travel
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/travel?city={cityName}` | Get travel info for a city |

### Metrics
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/metrics` | Get API performance metrics |

## Example Response — Travel
```json
{
  "success": true,
  "message": "Travel info fetched successfully",
  "data": {
    "city": "lucknow",
    "weather": {
      "temperatureCelsius": 35,
      "humidity": 31,
      "condition": "haze",
      "windSpeed": 3.09
    },
    "AQI": {
      "index": 2,
      "level": "Fair"
    },
    "topHeadlines": [...],
    "topPlaces": [...],
    "recommendation": [
      "Weather condition looks good for exploring the city."
    ]
  }
}
```

## Example Response — Metrics
```json
{
  "success": true,
  "message": "Metrics fetched successfully",
  "data": {
    "totalRequests": 10,
    "externalApiCalls": 30,
    "externalApiFailures": 0,
    "averageResponseTime": 523.4,
    "cacheHits": 7,
    "cacheMisses": 3
  }
}
```

## Installation & Setup

1. Clone the repository
```bash
git clone https://github.com/sah-lishi/smart-travel-api.git
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory and add the following variables:
```
PORT=8000
NODE_ENV=development
OPENWEATHER_API_KEY=your_openweather_api_key
GNEWS_API_KEY=your_gnews_api_key
GEOAPIFY_API_KEY=your_geoapify_api_key
WEATHER_BASE_URL=https://api.openweathermap.org/data/2.5
NEWS_BASE_URL=https://gnews.io/api/v4
GEOAPIFY_BASE_URL=https://api.geoapify.com/v2
```

4. Run the development server
```bash
npm start
```

## Project Structure
```
src/
├── cache/
├── config/
├── controllers/
├── docs/
├── externalClients/
├── middlewares/
├── routes/
├── services/
└── utils/
```