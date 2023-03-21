import styles from '@/styles/Home.module.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function News(props) {

  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

  const handleNews = () => {
    const options = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news',
      params: {safeSearch: 'Off', textFormat: 'Raw'},
      headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': '9abe612a0bmsh2f858e90285d182p19c479jsn8b867c1aa0e7',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      const articlesWithKeys = response.data.value.map((article) => {
        return {
          ...article,
          id: article.uuid // add a unique identifier to each article
        }
      });
      setArticles(articlesWithKeys);
      setCurrentArticleIndex(0);
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
      setError('An error occurred while fetching news.');
    });
  };

  return (
    <div>
      <button onClick={handleNews}>Get News</button>
      {error && <p>{error}</p>}
      {/* <ul style={{border: '1px solid black'}}>
        {articles.map((article) => (
          <li key={article.url}>
            <a href={article.url}>{article.name}</a> ({article.provider[0].name})
          </li>
        ))}
      </ul> */}
      {articles.length > 0 && (
        <div style={{border: '1px solid black'}}>
          <h2>{articles[currentArticleIndex].name}</h2>
          <p>{articles[currentArticleIndex].description}</p>
          <p>{articles[currentArticleIndex].provider[0].name}</p>
          <button
            onClick={() => setCurrentArticleIndex((currentArticleIndex + 1) % articles.length)}
          >
            Next Article
          </button>
        </div>
      )}
    </div>
  )
}
