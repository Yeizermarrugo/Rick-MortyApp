import React from 'react'

const Search = ({placeholder, location}) => {
  return (
    <div className="search-container">
        <input className="search" type="text" placeholder={placeholder}/>
        {location?.name.map((value,key) =>{
            return <div>{value.name}</div>
        })}
    </div>
  )
}

export default Search