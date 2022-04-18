import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/home/Feed'
import Sidebar from '../components/Sidebar'

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-white text-black dark:bg-[rgb(15,23,42)] dark:text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
}

const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Sidebar />
        <Feed />
        <h2>Widgets</h2>
      </div>
    </div>
  )
}

export default Home
