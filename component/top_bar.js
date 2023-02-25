import styles from '@/styles/Home.module.css';
import Link from 'next/link';

export default function TopBar () {
  return (
    <div className={styles.topbar_container}>
        <Link href="/cover" className={`${styles.icon} ${styles.book_icon}`}>
              <img style={{padding:3}} src="/icons/book.png" alt=""/>
        </Link>

      <img className={styles.logo} src="/logo_full_ver.png"/>
    
  </div>
  )
  
}


