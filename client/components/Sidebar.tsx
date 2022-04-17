import { useState } from 'react'
import { VscTwitter } from 'react-icons/vsc'
import SidebarOption from './SidebarOption'
import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from 'react-icons/ri'
import { BiHash } from 'react-icons/bi'
import { FiBell, FiMoreHorizontal } from 'react-icons/fi'
import { HiOutlineMail, HiMail } from 'react-icons/hi'
import { FaRegListAlt, FaHashtag, FaBell } from 'react-icons/fa'
import { CgMoreO } from 'react-icons/cg'
import {
  BsBookmarkFill,
  BsBookmark,
  BsPersonFill,
  BsPerson,
} from 'react-icons/bs'
import { useTheme } from 'next-themes'
import DarkmodeButton from './DarkmodeButton'

const style = {
  wrapper: `flex-[0.7] px-8 flex flex-col`,
  twitterIconContainer: `text-3xl m-4`,
  tweetButton: `bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
  navContainer: `flex-1`,
  profileButton: `flex items-center mb-6 cursor-pointer hover`,
  profileLeft: `flex items-center justify-center mr-4`,
  profileImage: `height-12 w-12 rounded-full`,
  profileRight: `flex-1 flex`,
  details: `flex-1`,
  name: `text-lg`,
  handle: `text-[#8899a6]`,
  moreContainer: `flex items-center mr-2`,
}

const Sidebar = ({ inititalSelectedIcon = 'Explore' }) => {
  const { theme, setTheme } = useTheme()
  const [selected, setSelected] = useState<string>(inititalSelectedIcon)
  return (
    <div className={style.wrapper}>
      <DarkmodeButton />
      <div className={style.twitterIconContainer}>
        <VscTwitter />
      </div>
      <div className={style.navContainer}>
        <SidebarOption
          Icon={selected === 'Home' ? RiHome7Fill : RiHome7Line}
          text="Home"
          setSelected={setSelected}
          isActive={Boolean(selected === 'Home')}
          redirect={'/'}
        />
        <SidebarOption
          Icon={selected === 'Explore' ? FaHashtag : BiHash}
          text="Explore"
          setSelected={setSelected}
          isActive={Boolean(selected === 'Explore')}
          redirect={'/'}
        />
        <SidebarOption
          Icon={selected === 'Notifications' ? FaBell : FiBell}
          text="Notifications"
          setSelected={setSelected}
          isActive={Boolean(selected === 'Notifications')}
          redirect={'/'}
        />
        <SidebarOption
          Icon={selected === 'Messages' ? HiMail : HiOutlineMail}
          text="Messages"
          setSelected={setSelected}
          isActive={Boolean(selected === 'Messages')}
          redirect={'/'}
        />
        <SidebarOption
          Icon={selected === 'Bookmarks' ? BsBookmarkFill : BsBookmark}
          text="Bookmarks"
          setSelected={setSelected}
          isActive={Boolean(selected === 'Bookmarks')}
          redirect={'/'}
        />
        <SidebarOption
          Icon={selected === 'Lists' ? RiFileList2Fill : FaRegListAlt}
          text="Lists"
          setSelected={setSelected}
          isActive={Boolean(selected === 'Lists')}
          redirect={'/'}
        />
        <SidebarOption
          Icon={selected === 'Profile' ? BsPersonFill : BsPerson}
          text="Profile"
          setSelected={setSelected}
          isActive={Boolean(selected === 'Profile')}
          redirect={'/profile'}
        />
        <SidebarOption
          Icon={CgMoreO}
          text="More"
          setSelected={setSelected}
          isActive={Boolean(selected === 'More')}
          redirect={'/'}
        />
        <div className={style.tweetButton}>Mint</div>
      </div>
      <div className={style.profileButton}>
        <div className={style.profileLeft}></div>
        <div className={style.profileRight}>
          <div className={style.details}>
            <div className={style.name}>cleverqazi</div>
            <div className={style.handle}>@0x22dF...5xf2dsf</div>
          </div>
          <div className={style.moreContainer}>
            <FiMoreHorizontal />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
