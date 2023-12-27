import React from 'react'

const VideoBackGround = ({videoKey}) => {
  return (
    <div className='aspect-video overflow-hidden'>
      <iframe className='w-full h-full ' src={"https://www.youtube.com/embed/"+videoKey+"?autoplay=1&mute=1&controls=0&&showinfo=0&loop=1&playlist="+videoKey} title="Trailer" frameBorder="0"></iframe>
    </div>
  )
}

export default VideoBackGround
