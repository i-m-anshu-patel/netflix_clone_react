import React from 'react'
import { IMG_CDN_LINK } from '../utils/constants'

const MovieCard = ({ movie }) => {
  return (
    <div className='pl-2 min-w-60 flex-none relative overflow-hidden'>
      <img className='h-64 w-60 rounded transition-transform duration-300 transform hover:scale-110 ' src={IMG_CDN_LINK+movie.poster_path} alt='IMG'  />
    </div>
  )
}

export default MovieCard
