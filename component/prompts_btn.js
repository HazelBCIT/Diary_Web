import styles from '@/styles/Home.module.css'

export default function ShowBtn(props) {
  return (
  <button onClick={props.showBtnHandler} className={styles.icon}>
    <img src="/icons/bulb.png" />
  </button>);
}

