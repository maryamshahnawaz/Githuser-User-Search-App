import React, { useState } from 'react';
import { USERSTYPE, USERSTYPE2 } from '../constants/USERSTYPE';

const SearchForm = ({ onSearch }) => {
 const [searchType, setSearchType] = useState(USERSTYPE);
 const [searchTerm, setSearchTerm] = useState('');

 const handleSearchTypeChange = (event) => {
  setSearchType(event.target.value);
  setSearchTerm('');
 };


 const handleSubmit = (event) => {
  event.preventDefault();
  if (searchTerm.trim() === '') {
   alert('Please Enter a Search 🌸 🌺');
   return;
  }
  onSearch(searchType, searchTerm);
 };


 const getPlaceholder = () => {
  return searchType === USERSTYPE ? 'Search for users' : 'Search for organizations';
 };


 return (
  <div className='container'>
   <form onSubmit={handleSubmit} className='search-form'>
    <label>
     <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className='search-input'
      placeholder={getPlaceholder()}
     />
    </label>
    <div>
     <label>
      <input
       type="radio"
       value={USERSTYPE}
       checked={searchType === USERSTYPE}
       onChange={handleSearchTypeChange}
      />
      Users
     </label>
     <label>
      <input
       type="radio"
       value={USERSTYPE2}
       checked={searchType === USERSTYPE2}
       onChange={handleSearchTypeChange}
      />
      Organizations
     </label>
    </div>
    <button type="submit" className='search-button'>Search</button>
   </form>
  </div>
 );
};

export default SearchForm;
