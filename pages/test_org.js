import styles from '@/styles/Home.module.css'
import { prisma } from '@/server/db/client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'
import Weather from '@/pages/api/weather';
import ShowWeatherBtn from './api/weather_btn';
// import ShowWeatherBtn from './api/weather_btn';
import LocationInput from './api/location_input';
import SideMenu from '@/component/SideMenu';
import UserName from '@/component/UserName';
import Prompts from '@/component/prompts';
import ShowPromptsBtn from '@/component/prompts_btn';
import TopBar from '@/component/top_bar';
import SaveBtn from '@/component/save_btn';


export default function Home({posts}) {

  const [newsData, setNewsDat] = useState();

  var newsApiKey = '4551243115444ba0a100a9567cd1b61d';
  var type = 'tesla';
  var date = '2022-12-17';
  var sortBy = 'publishedAt';

  const newsUrl = `https://newsapi.org/v2/everything?q=${type}&from=${date}&sortBy=${sortBy}&newsApiKey=${newsApiKey}`;

  const GrabNews = () => {
    axios.get(newsUrl)
      .then((response) => {
        console.clear();
        setNewsDat(response.data);
        console.log(response.data);
      }).catch(err => {
        console.log(err)
      })
  }

  // Weather API
  const [location, setLocation] = useState('');
  const [newsDsetData] = useState({});
  const [weather, setWeather] = useState();
  const [errorMessage, setErrorMessage] = useState('');

  var weatherApiKey = "95cd390841f1bbe052afd1a88c4fd163"
  var weatherLang = "en";
  var weatherUnits = "metric";
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${weatherUnits}&appid=${weatherApiKey}&lang=${weatherLang}`

    const searchLocation = (event) => {

    if(event.key === "Enter") {
      axios.get(weatherUrl)
      .then((response)=>{
        console.clear();
        setData(response.data)
        console.log(response.data);
        setWeather(response.data.weather);
        setErrorMessage("")
      }).catch(err => {
        console.log(err);
        setErrorMessage("Please enter another location.")
        setData({})
        setWeather
      })
      event.preventDefault();
      setLocation('')
    }

  }

  function setLocationChange(event) {
    setLocation(event.target.value)
  }

  // Get Today's Date
  var today = new Date();
  const month = today.toLocaleString('default', { month: 'long' });
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][today.getDay()]

  today = today.getFullYear() + ' ' + month + ' ' + String(today.getDate()) + ' ' + day;

  // Save the title and content into the server
  const apiKey = "4551243115444ba0a100a9567cd1b61d"
  const url = `https://newsapi.org/v2/everything?q=tesla&from=2022-12-17&sortBy=publishedAt&apiKey=${apiKey}`
  console.log(url);
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post('/api/posts', { title, content })
    console.log(res.data)
  }

  // Change background button
  const [bgIndex, setBgIndex] = useState(0);
  const bgImages = ['cover/bedsheet.jpg', 'bg/bg_2.jpg', 'bg/bg_3.jpg', 'bg/bg_4.jpg', 'bg/bg_5.jpg', 'bg/bg_6.jpg'];

  function changeBackgroundImage() {
    if (bgIndex === bgImages.length - 1) {
      setBgIndex(0);
    } else {
      setBgIndex(bgIndex + 1);
    }
  }

  // Weather button
  const [weatherIsOpen, setWeatherIsOpen] = useState(false);

  function showWeatherHandler() {
    if (weatherIsOpen) {
      setWeatherIsOpen(false);
    } else {
      setWeatherIsOpen(true);
    }
  }

  // Prompts button
  const [barIsOpen, setBarIsOpen] = useState(false);

  function showBtnHandler() {
    if (barIsOpen) {
      setBarIsOpen(false);
    } else {
      setBarIsOpen(true);
    }
  }

  // Font family picker
  const [fontFamily, setFontFamily] = useState('Helvetica');
  const handleFontChange = (newFont) => {
    setFontFamily(newFont);
  };

  const [showDropdown, setShowDropdown] = useState(false);
  function handleClick () {
    if (showDropdown) {
      setShowDropdown(false);
    } else {
      setShowDropdown(true);
    }
  };

  // Font size picker
  const [fontSize, setFontSize] = useState('18px');
  const handleFontSizeChange = (newFontSize) => {
    setFontSize(newFontSize);
  };

  const [showSizeDropdown, setShowSizeDropdown] = useState(false);
  function handleSizeClick () {
    if (showSizeDropdown) {
      setShowSizeDropdown(false);
    } else {
      setShowSizeDropdown(true);
    }
  };


  return (
    <div
      className={`${styles.wrapper} ${styles.wrapper_home_1}`}
      style={{ backgroundImage: `url(${bgImages[bgIndex]})` }}
      >
      <Head>

        <title>Miood Diary</title>

        <meta name="description" content="A diary app that you can write everyday event" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <SideMenu />
      <TopBar />

      <main className={styles.main}>
        <div className={styles.wrapper_main}>
          {/*------------ Change BG button ----------- */}
          <button className={styles.bg_button} onClick={changeBackgroundImage}>
            <img src="/icons/brush.png" alt=""/>
            <div className={styles.tooltip_content}>
              Change Background
            </div>
          </button>

          <form
            className={`${styles.paper} ${styles.form}`}
            onSubmit={handleSubmit}
            >

            <div className={styles.container_diaryHead}>
              <input
                type="text"
                value={title}
                className={styles.ttl_diaryTitle}
                placeholder="Entry Title"
                onChange={(e) => setTitle(e.target.value)}
              />
{/*------------ Info bar ----------- */}
              <div className={styles.infoBar}>
                <div class={`${styles.date} ${styles.icon}`}>
                  <img style={{padding:2, marginRight:10}} src="/icons/calender.png" />
                  {today}
                </div>
                <div className={styles.infoBar_right}>
                  <Weather
                    weather={weather}
                    data={data}
                  />
                  <button
                    onClick={() => GrabNews()}>Grab info</button>
                  <ShowWeatherBtn showWeatherHandler={showWeatherHandler} />
                  <ShowPromptsBtn showBtnHandler={showBtnHandler} />
                </div>
              </div>


{/*------------ Location input ----------- */}
              <div className={styles.location_container}>
                {weatherIsOpen && <LocationInput
                  location={location}
                  setLocationChange={setLocationChange}
                  searchLocation={searchLocation}
                />}
              </div>

{/*------------ Prompts area ----------- */}
              <div className={styles.prompts_bar}>
                {barIsOpen && <Prompts />}
              </div>
            </div>

{/*------------ Font picker ----------- */}
            <div className={styles.tool_bar}>
              {/*------------ Font Family ----------- */}
              <div className={styles.fontPicker_container}>
                <p style={{ fontFamily: fontFamily, width:160}}> {fontFamily} </p>
                <img
                  className={styles.icon}
                  style={{width:15, height:10}}
                  src="/icons/arrow_down.png"
                  alt="arrow_down"
                  onClick={handleClick}
                />

                {showDropdown && (
                  <>
                    <div className={styles.dropdown_menu}>
                      <ul className={styles.list}>
                        <li style={{width:"100%"}}>
                          <button
                            onClick={() => handleFontChange('Helvetica')}
                            style={{ fontFamily:"Helvetica "}}
                            className={styles.font_btn}
                          >Helvetica</button>
                        </li>
                        <li style={{width:"100%"}}>
                          <button
                            onClick={() => handleFontChange('Times New Roman')}
                            style={{ fontFamily:"Times New Roman" }}
                            className={styles.font_btn}
                          >Times New Roman</button>
                        </li>
                        <li style={{width:"100%"}}>
                          <button
                            onClick={() => handleFontChange('Raleway')}
                            style={{ fontFamily:"Raleway" }}
                            className={styles.font_btn}
                          >Raleway</button>

                        </li>
                        <li style={{width:"100%"}}>
                          <button
                            onClick={() => handleFontChange('Kalam')}
                            style={{ fontFamily:"Kalam" }}
                            className={styles.font_btn}
                          >Kalam</button>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
              {/*------------ Font Size ----------- */}
              <div className={styles.fontPicker_container} style={{borderLeft:"1px solid white", marginLeft:15}}>
                <p style={{width:100}}> {fontSize} </p>
                <img
                  className={styles.icon}
                  style={{width:15, height:10}}
                  src="/icons/arrow_down.png"
                  alt="arrow_down"
                  onClick={handleSizeClick}
                />

                {showSizeDropdown && (
                  <>
                    <div className={styles.dropdown_menu} style={{width:100}}>
                      <ul className={styles.list}>
                        <li style={{width:"100%"}}>
                          <button
                            onClick={() => handleFontSizeChange('16px')}
                            style={{ fontSize:"16px"}}
                            className={styles.font_btn}
                          >16px</button>
                        </li>
                        <li style={{width:"100%"}}>
                          <button
                            onClick={() => handleFontSizeChange('18px')}
                            style={{ fontSize:"18px" }}
                            className={styles.font_btn}
                          >18px</button>
                        </li>
                        <li style={{width:"100%"}}>
                          <button
                            onClick={() => handleFontSizeChange('24px')}
                            style={{ fontSize:"24px" }}
                            className={styles.font_btn}
                          >24px</button>

                        </li>
                        <li style={{width:"100%"}}>
                          <button
                            onClick={() => handleFontSizeChange('32px')}
                            style={{ fontSize:"32px" }}
                            className={styles.font_btn}
                          >32px</button>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>

            <textarea
              style={{ fontFamily: fontFamily , fontSize:fontSize }}
              value={content}
              className={styles.textarea_diaryContent}
              placeholder="Write about your day"
              onChange={(e) => setContent(e.target.value)}
            />

            <SaveBtn />
          </form>
        </div>
      </main>

    </div>
  )
}


export async function getServerSideProps() {
  const posts = await prisma.post.findMany()

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    }
  }
}

export const MyPosts = (props) => {
  const { posts } = props;

  return (
    <ul className={styles.post_list}>
      {posts.map((post) => (
        <li
          key={post.id}
          className={styles.post_listitem}>
          <a href="">
            <p>{}</p>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </a>
        </li>
      ))}
    </ul>
  )
}
