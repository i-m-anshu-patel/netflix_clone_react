import React from 'react'
import MovieCard from './MovieCard'

const MovieCarousal = ({movies}) => {
  return (
    <div className='flex overflow-x-scroll'>
      {movies && movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  )
}

export default MovieCarousal
