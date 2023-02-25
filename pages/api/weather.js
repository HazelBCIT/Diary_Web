import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import axios from 'axios'
import Image from 'next/image'



export default function Weather(props) {

  return (
    <>
          {
            props.weather && props.weather.map((w,index) => {
              return (
                <div key={index}>
                    <div className={`${styles.row} ${styles.wrapper_weather}`}>
                      <div className={styles.city_name}>
                        {props.data.name}
                      </div>
                      <div>
                        <img
                        src={`http://openweathermap.org/img/wn/${w.icon}@2x.png`}
                        alt={w.description}
                        className={styles.icon}/>
                      </div>
                      <div>{props.data.main.temp_min.toFixed()}</div>
                      <p> ~ </p>
                      <div>{props.data.main.temp_max.toFixed()}°C</div>
                  </div>
                </div>
              )
            })
          }
    </>
  )
}
