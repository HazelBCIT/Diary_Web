import styles from '@/styles/SaveBtn.module.css'


export default function SaveBtn() {
  return (
    <button className={styles.btn}>
      Save
      <span></span><span></span><span></span><span></span>
    </button>
  )
}