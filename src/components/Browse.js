import React, { useEffect, useState } from 'react'
import useFetchData from '../utils/useFetchData'
import { MOVIE_LIST } from '../utils/constants'

const Browse = () => {
  const movieList = useFetchData(MOVIE_LIST)
  console.log(movieList);
  
  return (
    <div>
      Browse
    </div>
  )
}

export default Browse
