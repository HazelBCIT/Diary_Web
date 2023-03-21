import styles from '@/styles/Home.module.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import KeywordInput from '../api/keyword_input';
import ShowNewsBtn from '../api/news_btn';

export default function News(props) {

  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  // Weather button
  const [newsIsOpen, setNewsIsOpen] = useState(false);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

  function showNewsHandler() {
    if (newsIsOpen) {
      setNewsIsOpen(false);
    } else {
      setNewsIsOpen(true);
    }
  }

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

    const searchKeyword = (event) => {
      if(event.key === "Enter") {
        axios.request(options).then(function (response) {
          const articlesWithKeys = response.data.value.map((article) => {
            return {
              ...article,
              id: article.uuid // add a unique identifier to each article
            }
          });
          setArticles(articlesWithKeys);
          console.log(response.data);
        }).catch(function (error) {
          console.error(error);
          setError('An error occurred while fetching news.');
        })
        event.preventDefault();
        setKeyword('')
      }
    }

    function setArticleChange(event) {
      setArticle(event.target.value)
    }
  };

  return (
    <div>
      <button onClick={handleNews}>Get News</button>

      <div className={styles.location_container}>
        {newsIsOpen && <KeywordInput
          keyword={keyword}
          setArticleChange={setArticleChange}
          searchKeyword={searchKeyword}
        />}
      </div>

      {error && <p>{error}</p>}
      <ul style={{border: '1px solid black'}}>
        {articles.map((article) => (
          <li key={article.url}>
            <a href={article.url}>{article.name}</a> ({article.provider[0].name})
          </li>
        ))}
      </ul>

    </div>
  )
}
