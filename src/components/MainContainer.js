import React, { useEffect, useState } from 'react'
import useFetchData from '../utils/useFetchData';
import { MOVIE_DETAILS_PART1, MOVIE_DETAILS_PART2 } from '../utils/constants';
import VideoBackGround from './VideoBackGround';

const MainContainer = ({ movie }) => {
    const [mainMovieDetail, setMainMovieDetail] = useState([])
    const movieId = movie.id;
    const movieDetail = useFetchData(MOVIE_DETAILS_PART1 + movieId + MOVIE_DETAILS_PART2)

    useEffect(() => {
        if (movieDetail && movieDetail.results) {
            setMainMovieDetail(movieDetail.results)
        }
    }, [movieDetail])
    return mainMovieDetail[0] && (
        <div className='relative'>
            <VideoBackGround videoKey={mainMovieDetail[0].key} />
            <div className='grid grid-cols-2 pl-2 aspect-video bg-gradient-to-r from-black text-white absolute top-0 left-0'>
                <div className='m-16 pt-[30%]'>
                    <p className='text-3xl w-1/2'>{movie.original_title}</p>
                    <p className='text-lg pt-2 w-3/4'>{movie.overview}</p>
                    <div className='flex'>
                        <button className='mt-3 rounded bg-white p-3 text-black font-bold opacity-80'>Play Now</button>
                        <button className='mt-3 ml-3 rounded bg-red-500 p-3'>More info</button>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default MainContainer
