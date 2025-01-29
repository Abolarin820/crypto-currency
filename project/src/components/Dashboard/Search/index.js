import React from 'react'
import "./style.css";
import { SearchRounded } from '@mui/icons-material';

function Search({search, onSearchChange}) {
 
  return (
    <div className='search-flex'>
      <SearchRounded />
      <input type="text" placeholder="Search" value={search} onChange={(e)=> onSearchChange(e)} />
    </div>
  )
}

export default Search
