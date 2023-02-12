import React, { useState } from 'react'
import './SearchBar.css'

function SearchBar({placeholder, data}) {

    const[filteredData, setFilteredData] = useState([]);
    const handleFilter =(event) =>{
      const searchWord = event.target.value
      const newFilter = data.filter((value) => {
        return value.name.includes(searchWord);

      })
      setFilteredData(newFilter);
    };
  return (
    <div className = "search">
        <div className='searchInputs'>
        <input type="text" placeholder={placeholder} onChange={handleFilter}/>
        <div className='searchIcon'>
        </div>
        </div>
        {filteredData.length != 0  && (
        <div className='searchResults'>
            {filteredData.map((value,key) => {
                return <div> {value.name}</div>
            })}
        </div>
        )}

    </div>
  )
}

export default SearchBar