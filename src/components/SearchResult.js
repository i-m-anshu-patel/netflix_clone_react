import React, { useState, useEffect } from 'react'
import MovieCarousal from './MovieCarousal';

const SearchResult = ({ searchText, searchedMovieList }) => {
   
    return (
        <div className='text-3xl text-white '>
            <div className='container mx-auto p-8 bg-black mt-10 bg-opacity-90'>
            <p className='text-bolder text-xl mb-5 ml-2'>Search results for '{searchText}'</p>
               <MovieCarousal movies={searchedMovieList} />
            </div>
        </div>
    )
}

export default SearchResult
