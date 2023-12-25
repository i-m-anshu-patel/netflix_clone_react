import React, { useEffect, useState } from 'react'
import useFetchData from '../utils/useFetchData';
import { MOVIE_DETAILS_PART1, MOVIE_DETAILS_PART2 } from '../utils/constants';
import VideoBackGround from './VideoBackGround';

const MainContainer = ({ movie }) => {
    const [mainMovieDetail, setMainMovieDetail] = useState([])
    const movieId = movie.id;
    const movieDetail = useFetchData(MOVIE_DETAILS_PART1+movieId+MOVIE_DETAILS_PART2)

    useEffect(() => {
        if(movieDetail && movieDetail.results){
            setMainMovieDetail(movieDetail.results)
        }
    }, [movieDetail])
    return mainMovieDetail[0] && (
        <>
        <VideoBackGround videoKey={mainMovieDetail[0].key}/>
        <div className='grid grid-cols-2 pl-2'>
            <div className='m-16 pt-20'>
                <p className='text-3xl'>{movie.original_title}</p>
                <p className='text-lg pt-2'>{movie.overview}</p>
                <div className='flex'>
                <button className='mt-3'>Play Now</button>
                <button className='mt-3'>More info</button>
                </div>
                
                <iframe src={"https://www.youtube.com/embed/"+mainMovieDetail[0].key+"?autoplay=1&mute=1"} title="Trailer" frameBorder="0"></iframe>
            </div>
            <div>
                Side wala
            </div>
        </div>
        </>
    )
}

export default MainContainer
