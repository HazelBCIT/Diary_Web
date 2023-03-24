import styles from '@/styles/Home.module.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

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
      setShowPopup(true); // Show the popup when news articles are fetched
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
      setError('An error occurred while fetching news.');
    });
  };

  return (
    <div className={styles.news_Area}>
      <button

        className={styles.icon} 
        style={{alignSelf:"flex-end"}}
        onClick={handleNews}
      >
        <img src="/icons/coffee.png" style={{padding:2}}/>
        <div className={styles.tooltip_content} style={{left:"-80%",
  top:45 ,minWidth:"7rem"}}>
          Get News
        </div>
      </button>

      {error && <p>{error}</p>}
      {showPopup && articles.length > 0 && (
        <div
          style={{border: '1px solid black'}}
          className={styles.news_displayBox}
          >

          <button
            className={styles.news_btn_closePopup}
            onClick={() => setShowPopup(false)}>
              <span dangerouslySetInnerHTML={{__html: '<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 5L5 15" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M5 5L15 15" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>'}} />
          </button>

          <h2 className={styles.news_displayName}>
            {articles[currentArticleIndex].name}
          </h2>
          <p className={styles.news_displayDesc}>
            {articles[currentArticleIndex].description}
          </p>
          <p className={styles.news_displayProvider}>
            {articles[currentArticleIndex].provider[0].name}
          </p>

          <div className={styles.news_btn_cont}>

            <button
              className={styles.news_btn_changeArticle}
              onClick={() => setCurrentArticleIndex((currentArticleIndex - 1 + articles.length) % articles.length)}
              disabled={currentArticleIndex === 0}>
                Previous Article
            </button>

            <button
              className={styles.news_btn_changeArticle}
              onClick={() => setCurrentArticleIndex((currentArticleIndex + 1) % articles.length)}>
                Next Article
            </button>
          </div>

        </div>
      )}
    </div>
  )
}
