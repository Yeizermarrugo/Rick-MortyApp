import React, { useState } from 'react'


const Search = ({setLocationSearch, placeholder}) => {

 

    const searchLocation = (e) => {
        e.preventDefault()
        setLocationSearch(e.target.children[0].value)
    }

  return (
    <form  className="search-container" onSubmit={searchLocation}>
        <input className="search-input" type="search" name="search" placeholder={placeholder}/>
    </form>
  )
}

export default Search