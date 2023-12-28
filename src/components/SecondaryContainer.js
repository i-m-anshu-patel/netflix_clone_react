import React from 'react'
import MovieCarousal from './MovieCarousal';

const SecondaryContainer = ({movies}) => {
    console.log(movies);
  return (
    <div>
        <p>Now Playing</p>
      <MovieCarousal movies={movies} />
    </div>
  )
}

export default SecondaryContainer
