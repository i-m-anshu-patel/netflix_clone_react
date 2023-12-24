import React, { useEffect, useState } from 'react';
import useFetchData from '../utils/useFetchData';
import { MOVIE_LIST } from '../utils/constants';
import { useSelector } from 'react-redux';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const movieList = useFetchData(MOVIE_LIST);
  const user = useSelector((store) => store.user.users);

  useEffect(() => {
    if (movieList && movieList.results) {
      setMoviesList(movieList.results);
      setIsLoading(false); // Update loading state when data is received
    }
  }, [movieList]);

  return isLoading ? (
    <h1>Loading....</h1>
  ) : (
    <div className={(user.length > 0 ? 'bg-white ' : '') + 'grid grid-cols-2'}>
      {moviesList && moviesList.length > 0 && (
        <>
          <MainContainer movie={moviesList[0]} /> {/* Pass the first movie */}
          <SecondaryContainer movies={moviesList} /> {/* Pass the entire movies list */}
        </>
      )}
    </div>
  );
};

export default Browse;
