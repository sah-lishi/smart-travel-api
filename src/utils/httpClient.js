import axios from "axios"
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

        return response.data
    } catch (error) {
        if(maxRetry > 0) {
            console.log(`Retrying...(${url})`);
            fetchWithRetry(url, options, maxRetry = maxRetry-1)
        }
        console.error("API request failed after retries:", error.message);
        throw error;
    }
}

export default fetchWithRetry