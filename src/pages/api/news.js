import styles from '@/src/styles/Home.module.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function News(props) {
  const { handleSave } = props;
  const [loadedArticles, setLoadedArticles] = useState([]);
  const [error, setError] = useState(null);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState({});

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

    axios
      .request(options)
      .then(function (response) {
        const articlesWithKeys = response.data.value.map((article) => {
          return {
            ...article,
            id: article.uuid // add a unique identifier to each article
          }
        });
        setLoadedArticles(articlesWithKeys);
        setCurrentArticleIndex(0);
        setShowPopup(true); // Show the popup when news articles are fetched
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
        // setError('An error occurred while fetching news.');
        props.setError('An error occurred while fetching news.');
      });

    const handleSave = (article) => {
      console.log("Saving article:", article);
      props.handleSave(article.title, article.content, article.media);
    }

  };

  return (
    <div className={styles.news_Area}>
      <button
        className={styles.news_btn_showArticle}
        onClick={handleNews}>Get News
      </button>

      {error && <p>{error}</p>}
      {showPopup && loadedArticles.length > 0 && (
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
            {loadedArticles[currentArticleIndex].name}
          </h2>
          <p className={styles.news_displayDesc}>
            {loadedArticles[currentArticleIndex].description}
          </p>
          <p className={styles.news_displayProvider}>
            {loadedArticles[currentArticleIndex].provider[0].name}
          </p>

          <div className={styles.news_btn_cont}>

            <button
              className={styles.news_btn_changeArticle}
              onClick={() => setCurrentArticleIndex((currentArticleIndex - 1 + loadedArticles.length) % loadedArticles.length)}
              disabled={currentArticleIndex === 0}>
                Previous Article
            </button>

            <button
              className={styles.news_btn_changeArticle}
              onClick={() => setCurrentArticleIndex((currentArticleIndex + 1) % loadedArticles.length)}>
                Next Article
            </button>
          </div>

          <button
            onClick={() =>
              handleSave(
                loadedArticles[currentArticleIndex].name,
                loadedArticles[currentArticleIndex].description,
                loadedArticles[currentArticleIndex].image?.thumbnail?.contentUrl
              )
            }>
            Save
          </button>


        </div>
      )}

    </div>
  )
}

function SavedNews(props) {
  const { selectedArticle, handleSave } = props;
  return (
    <div className={styles.news}>
      {selectedArticle && (
        <>
          <h2 className={styles.news_displayName}>{selectedArticle.name}</h2>
          <p className={styles.news_description}>{selectedArticle.description}</p>
          <p className={styles.news_content}>{selectedArticle.content}</p>
          <button className={styles.news_saveBtn} onClick={() => handleSave(selectedArticle.name, selectedArticle.content, selectedArticle.url)}>Save</button>
        </>
      )}
    </div>
  );
}

export { News, SavedNews };