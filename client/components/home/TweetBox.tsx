import { useState } from 'react'
import { BsCardImage, BsEmojiSmile } from 'react-icons/bs'
import { RiFileGifLine, RiBarChartHorizontalFill } from 'react-icons/ri'
import { IoMdCalendar } from 'react-icons/io'
import { MdOutlineLocationOn } from 'react-icons/md'

const style = {
  wrapper: `px-4 flex flex-row border-b  border-[rgb(239, 243, 244)] dark:border-[#38444d] pb-4 `,
  tweetBoxLeft: `mr-4`,
  tweetBoxRight: `flex-1`,
  profileImage: `h-12 w-12 rounded-full object-cover`,
  inputField: `w-full h-full outline-none bg-transparent text-lg`,
  formLowerContainer: `flex`,
  iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
  icon: `mr-2`,
  sumbitGeneral: `px-6 py-2 rounded-3xl font-bold`,
  inactiveSubmit: `bg-[#195195] text-[#95999e]`,
  activeSubmit: `bg-[#1d9bf0] text-white`,
}

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('')
  const postTweet = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    console.log(tweetMessage)
  }
  //TODO: Make the feed widget responsive
  return (
    <div className={style.wrapper}>
      <div className={style.tweetBoxLeft}>
        <img
          src="https://i.imgur.com/X9viIRF.jpg"
          alt="profile image"
          className={style.profileImage}
        />
      </div>
      <div className={style.tweetBoxRight}>
        <form>
          <textarea
            className={style.inputField}
            placeholder="what's happening?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          ></textarea>
        </form>
        <div className={style.formLowerContainer}>
          <div className={style.iconsContainer}>
            <BsCardImage className={style.icon} />
            <RiFileGifLine className={style.icon} />
            <RiBarChartHorizontalFill className={style.icon} />
            <BsEmojiSmile className={style.icon} />
            <IoMdCalendar className={style.icon} />
            <MdOutlineLocationOn className={style.icon} />
          </div>
          <button
            type="submit"
            className={`${style.sumbitGeneral} ${
              tweetMessage ? style.activeSubmit : style.inactiveSubmit
            }`}
            onClick={(event) => postTweet(event)}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  )
}

export default TweetBox
