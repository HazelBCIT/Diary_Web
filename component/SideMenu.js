import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import UserName from '@/component/UserName.js';

// const PostList = () => <MyPosts />;
export default function SideMenu(){

  return (
    <div className={styles.wapper_sidemenu}>
      <ul>
        <li className={styles.sidemenu_list_item}>
          <Link
            href=""
            className={styles.sidemenu_list_text}>
            New Diary
          </Link>
        </li>
        <li className={styles.sidemenu_list_item}>
          <Link
            href=""
            className={styles.sidemenu_list_text}>
            Diary List
          </Link>
        </li>
        <li className={styles.sidemenu_list_item}>
          <Link
            href=""
            className={styles.sidemenu_list_text}>
            Favorite Diary
          </Link>
        </li>
      </ul>

    </div>
  )
}
