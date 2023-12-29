import React from 'react'
import MovieCarousal from './MovieCarousal';

const SecondaryContainer = ({movies}) => {
    console.log(movies);
  return (
    <div>
        <div>
            <p className='text-xl font-bold '>Now Playing</p>
            <MovieCarousal movies={movies} />
        </div>
        <div className='mt-3'>
            <p className='text-xl font-bold '>Popular Movies</p>
            <MovieCarousal movies={movies} />
        </div>
        <div className='mt-3'>
            <p className='text-xl font-bold '>Trending</p>
            <MovieCarousal movies={movies} />
        </div>
        <div className='mt-3'>
            <p className='text-xl font-bold '>Now Playing</p>
            <MovieCarousal movies={movies} />
        </div>
      
    </div>
  )
}

export default SecondaryContainer
