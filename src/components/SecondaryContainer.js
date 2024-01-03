import React, { useEffect, useState } from 'react'
import MovieCarousal from './MovieCarousal';
import useFetchData from '../utils/useFetchData';
import { POPULAR_MOVIES, TOP_RATED_MOVIES, UPCOMING_MOVIES } from '../utils/constants';

const SecondaryContainer = ({ movies }) => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const popularMovieList = useFetchData(POPULAR_MOVIES);
    const topRatedMoviesList = useFetchData(TOP_RATED_MOVIES);
    const upcomingMoviesList = useFetchData(UPCOMING_MOVIES);

    useEffect(() => {
        if (popularMovieList && popularMovieList.results) {
            setPopularMovies(popularMovieList.results)
        }
    }, [popularMovieList])

    useEffect(() => {
        if (topRatedMoviesList && topRatedMoviesList.results) {
            setTopRatedMovies(topRatedMoviesList.results)
        }
    }, [topRatedMoviesList])

    useEffect(() => {
        if (upcomingMoviesList && upcomingMoviesList.results) {
            setUpcomingMovies(upcomingMoviesList.results)
        }
    }, [upcomingMoviesList])

    return (
        <div className='bg-black'>
            <div className='-mt-20  relative z-50 '>
                <p className='text-xl font-bold ml-2 text-white mb-2'>Now Playing</p>
                <MovieCarousal movies={movies} />
            </div>
            <div className='mt-3'>
                <p className='text-xl font-bold ml-2 text-white  mb-2'>Popular Movies</p>
                <MovieCarousal movies={popularMovies} />
            </div>
            <div className='mt-3'>
                <p className='text-xl font-bold ml-2 text-white mb-2'>Top Rated Movies</p>
                <MovieCarousal movies={topRatedMovies} />
            </div>
            <div className='mt-3'>
                <p className='text-xl font-bold ml-2 text-white mb-2'>Upcoming Movies</p>
                <MovieCarousal movies={upcomingMovies} />
            </div>

        </div>
    )
}

export default SecondaryContainer
