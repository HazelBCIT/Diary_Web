import styles from '@/styles/Home.module.css';

export default function TopBar () {
  return (
    <div className={styles.topbar_container}>
      <button className={`${styles.icon} ${styles.book_icon}`} >
        <img src="/icons/book.png" alt=""/>
      </button>

      <img className={styles.logo} src="/logo_full_ver.png"/>
    
  </div>
  )
  
}


