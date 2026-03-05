const transformNews = (newsData) => {
    
    return newsData
        .articles
        .slice(0,5)
        .map(article => ({
            title: article.title,
            description: article.description,
            url: article.url,
            publishedAt: article.publishedAt
        })) 
}

export default transformNews