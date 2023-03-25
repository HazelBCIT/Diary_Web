import styles from '@/src/styles/Home.module.css'

export default function ShowPromptsBtn(props) {
  return (
  <button onClick={props.showBtnHandler} className={styles.icon} style={{alignSelf:"flex-end"}}>
    <img src="/icons/bulb.png" />
  </button>);
}
