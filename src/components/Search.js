import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'
import useFetchData from '../utils/useFetchData'
import { SEARCH_MOVIES_PART1, SEARCH_MOVIES_PART2 } from '../utils/constants'

const Search = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedMovieList, setSearchMovieList] = useState([]);
    const movieData = useFetchData(SEARCH_MOVIES_PART1+searchText+SEARCH_MOVIES_PART2);
    useEffect(() => {
       if(movieData && movieData.results){
        setSearchMovieList(movieData.results)
       }
    }, [movieData, searchText])
  return (
    <div>
      <SearchBar  setSearchText={setSearchText} />
      {searchText !== '' && (<SearchResult searchText={searchText} searchedMovieList={searchedMovieList}/>)}
    </div>
  )
}

export default Search
