import React, { useState } from 'react'

const Search = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState("");  

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);  
    onSearch(value);  
  };
  return (
    <div className='h-18 w-full flex justify-center'>
        <input value={searchTerm} onChange={handleChange} className='w-xl h-full text-lg font-semibold p-4 bg-white rounded-full' type="text" />
    </div>
  )
}

export default Search