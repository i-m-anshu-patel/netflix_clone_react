import React, { useEffect, useRef, useState } from 'react'
import useFetchData from '../utils/useFetchData'
import { SEARCH_MOVIES_PART1, SEARCH_MOVIES_PART2 } from '../utils/constants'

const SearchBar = ({setSearchText}) => {
    const searchText = useRef(null)
    const handleSubmit = async (e) => {
        e.preventDefault()
        setSearchText(searchText.current.value);
    }

    
  return (
    <div className='pt-[6%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={handleSubmit}>
        <input type="text" className='p-4 m-4 col-span-9' placeholder='What would you like to watch today?' ref={searchText} />
        <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar
