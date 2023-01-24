import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Weather() {
  const [location, setLocation] = useState('');
  const [data,setData] = useState({});
  const [weather, setWeather] = useState();
  const [errorMessage, setErrorMessage] = useState('');

  var apiKey = "95cd390841f1bbe052afd1a88c4fd163"
  var lang = "en";
  var units = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=${apiKey}&lang=${lang}`

  const searchLocation = (event) => {
    if(event.key === "Enter") {
      axios.get(url)
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
      setLocation('')
    }
  }

  return (
    <>
      <div className={styles.row}>
          <input className={styles.text_location}
              value={location}
              onChange={event => setLocation(event.target.value)}
              placeholder="Enter Location"
              onKeyDown={searchLocation}
              type="text"
            />

          {errorMessage}
          {
            weather && weather.map((w,index) => {
              return (
                <div key={index}>
                    <div className={styles.row}>
                      <div className={styles.city_name}>
                        {data.name}
                      </div>
                      <div>{w.icon}</div>
                      <div>{data.main.temp_min.toFixed()}</div>
                      <p> ~ </p>
                      <div>{data.main.temp_max.toFixed()}°C</div>
                  </div>
                </div>
              )
            })
          }
       
        
      </div>
    </>
  )
}