import styles from '@/styles/Home.module.css'

export default function ShowNewsBtn(props) {
  return (
  <button onClick={props.showNewsHandler} className={styles.icon} style={{alignSelf:"flex-end"}}>
    <img src="/icons/weather_icon.png" />
  </button>);
}
