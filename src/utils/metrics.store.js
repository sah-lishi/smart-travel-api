const metrics = {
    totalRequests: 0,
    externalApiCalls: 0,
    externalApiFailures: 0,
    totalResponseTime: 0,
    cacheHits: 0,
    cacheMisses: 0
}

export const incrementTotalRequests = () => {
    metrics.totalRequests++
}
export const incrementexternalApiCalls = () => {
    metrics.externalApiCalls++
}
export const incrementexternalApiFailures = () => {
    metrics.externalApiFailures++
}
export const incrementcacheHits = () => {
    metrics.cacheHits++
}
export const incrementcacheMisses = () => {
    metrics.cacheMisses++
}
export const incrementtotalResponseTime = (time) => {
    metrics.totalResponseTime += time
}

export const getMetrics = () => {
    const averageResponseTime = metrics.totalResponseTime / metrics.totalRequests
    return {
        totalRequests: metrics.totalRequests,
        externalApiCalls: metrics.externalApiCalls,
        externalApiFailures: metrics.externalApiFailures,
        averageResponseTime: averageResponseTime,
        cacheHits: metrics.cacheHits,
        cacheMisses: metrics.cacheMisses
    }
}