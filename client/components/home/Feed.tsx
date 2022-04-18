import React from 'react'
import { BsStars } from 'react-icons/bs'
import TweetBox from './TweetBox'

const style = {
  wrapper: `flex-[2] border-r border-l border-[rgb(239, 243, 244)] dark:border-[#38444d]`,
  header: `sticky top-0  bg-[#fffff] dark:bg-[rgb(15,23,42)] z-10 p-4 flex justify-between items-center text-black dark:text-white`,
  headerTitle: `text-xl font-bold`,
}

const Feed = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
    </div>
  )
}

export default Feed
