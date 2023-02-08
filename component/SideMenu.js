import styles from '@/styles/Home.module.css'
import { prisma } from '@/server/db/client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'
import UserName from '@/component/UserName.js';

// const PostList = () => <MyPosts />;
export default function SideMenu(){

  return (
    <div
      className={`${styles.wrapper} ${styles.wrapper_home}`}
      >
      <p className={styles.ttl_page}><UserName /> Diary</p>
      <ul>
        <li>
          <button
             className={styles.}>
          </button>
          <button
             className={styles.}>
          </button>
        </li>
      </ul>

    </div>
  )
}
