import React from 'react'
import MovieCard from './MovieCard'

const MovieCarousal = ({movies}) => {
  return (
    <div className='flex overflow-x-scroll no-scrollbar'>
      {movies && movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default MovieCarousal
