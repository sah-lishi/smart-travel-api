const cache = new Map()

const setCache = (key, data, ttl) => {
    const expiry = Date.now() + ttl
    cache.set(key, {
        data,
        expiry
    })
}

const getCache = (key) => {
    const cachedData = cache.get(key)
    if(!cachedData)
        return null

    const {data, expiry} = cachedData
    if(Date.now > expiry) {
        cache.delete(key)
        return null
    }

    return data
}

export {setCache, getCache}