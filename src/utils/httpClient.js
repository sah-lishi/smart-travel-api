import axios from "axios"
import { incrementexternalApiCalls, incrementexternalApiFailures } from "./metrics.store.js"

const TIMEOUT = 5000
const MAX_RETRY = 2

const fetchWithRetry = async(url, options, maxRetry = MAX_RETRY) => {
    try {
        const response = await axios({
            method: "GET",
            url: url,
            timeout: TIMEOUT,
            ...options
        })
        incrementexternalApiCalls()

        return response.data
    } catch (error) {
        if(maxRetry > 0) {
            console.log(`Retrying...(${url})`);
            return fetchWithRetry(url, options, maxRetry-1)
        }

        incrementexternalApiFailures()
        console.error("API request failed after retries:", error.message);
        throw error;
    }
}

export default fetchWithRetry