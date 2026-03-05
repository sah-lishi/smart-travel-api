const transformAQI = (AQIdata) => {
    const index = AQIdata.list[0].main.aqi
    const AQIMap = {
        1: "Good",
        2: "Fair",
        3: "Moderate",
        4: "Poor",
        5: "Very Poor"
    }

    return {
        index: index, 
        level: AQIMap[index]
    }
}

export default transformAQI