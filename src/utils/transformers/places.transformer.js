const transformPlaces = (placesData) => {
    
    return placesData
        .features
        .map(place => ({
            name: place.properties.name || "Unknown place",
            address: place.properties.formatted,
            category: place.properties.categories[0]
            }))
}

export default transformPlaces