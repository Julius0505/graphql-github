import React, { useState } from 'react'
const SearchInput = ({ onSearchClick, handleRequest }) => {
  const [searchValue, setSearchValue] = useState('')

 return (
  <div className=" flex justify-evenly lg:justify-start">
   <div className="relative w-7/12 lg:w-4/12">
    <input
     type="text"
     id="name-with-label"
     className=" rounded-lg  flex-1 appearance-none  border-gray-300 w-full py-2 px-4 bg-white  text-gray-700 placeholder-gray-400 shadow-md text-base focus:outline-none  border-transparent"
     name="email"
     onChange={(e) => setSearchValue(e.target.value)}
     placeholder="Start typing to search..."
    />
   </div>

   {/* Select */}

   <select
    className="block w-24
     text-gray-700 py-2 px-3  bg-white rounded-md  focus:outline-none focus:ring-primary-500 border-transparent shadow-md lg:ml-4"
    name="animals"
    onChange={handleRequest}
   >
    <option value="user">Users</option>
    <option value="repo">Repo</option>
   </select>

   <button
    type="button"
    className="block w-24
    text-gray-700 py-2 px-3  bg-white rounded-md  focus:outline-none focus:ring-primary-500 border-transparent shadow-md lg:ml-4"
    onClick={() => onSearchClick(searchValue)}
  >
    Search
  </button>

   {/* Select */}
  </div>
 )
}

export default SearchInput