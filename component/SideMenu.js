import styles from '@/styles/SideMenu.module.css'
import Link from 'next/link'
import UserName from '@/component/UserName.js';

// const PostList = () => <MyPosts />;
export default function SideMenu(){

  return (
    <div className={styles.wapper_sidemenu}>
      <ul className={styles.sidemenu_list}>
        <li className={styles.sidemenu_list_item}>
          <Link
            href="/"
            className={styles.sidemenu_list_text}>
              <img style={{padding:2}} src="/icons/add.png"/>
              New Diary
          </Link>
          <span></span><span></span><span></span><span></span>
        </li>
        <li className={styles.sidemenu_list_item}>
          <Link
            href="@/pages/PostList/index.js"
            className={styles.sidemenu_list_text}>
              <img style={{padding:3}} src="/icons/list.png"/>
              Diary List
          </Link>
          <span></span><span></span><span></span><span></span>
        </li>
        <li className={styles.sidemenu_list_item}>
          <Link
            href="/cover"
            className={styles.sidemenu_list_text}>
              <img src="/icons/favorite.png"/>
              Favorite Diary
          </Link>
          <span></span><span></span><span></span><span></span>
        </li>
        <li className={styles.sidemenu_list_item}>
          <Link
            href="/cover"
            className={styles.sidemenu_list_text}>
              <img style={{padding:2}} src="/icons/book.png"/>
              Back To Cover
          </Link>
          <span></span><span></span><span></span><span></span>
        </li>
      </ul>

    </div>
  )
}
