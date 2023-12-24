import React from 'react'

const MainContainer = ({movie}) => {
    console.log(movie);
    const movieId = movie.id;
  return (
    <div>
     <p>{movie.original_title}</p>
      <p>{movie.overview}</p>
      <button>Play Now</button>
    </div>
  )
}

export default MainContainer
