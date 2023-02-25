import styles from '@/styles/Home.module.css'

export default function ShowWeatherBtn(props) {
  return (
  <button onClick={props.showWeatherHandler} className={styles.icon} style={{alignSelf:"flex-end"}}>
    <img src="/icons/weather_icon.png" />
  </button>);
}