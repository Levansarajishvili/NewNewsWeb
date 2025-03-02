import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem'

const NewsList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=world&apiKey=d7cf90a9ac31489abe12c1fb17e05354`);
            setArticles(response.data.articles);
            console.log(response);
        };

        getArticles();
    }, []);

    return (
        <div>
            {articles.map(article => {
                return (
                  <NewsItem 
                  title={article.title}
                  description={article.description}
                  url={article.url}
                  urlToImage={article.urlToImage}
                  />
                )
            })}
        </div>
    );
};

export default NewsList;
