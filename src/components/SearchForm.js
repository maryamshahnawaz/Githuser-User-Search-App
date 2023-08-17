import React, { useState } from 'react';


const SearchForm = ({ onSearch }) => {
 const [searchType, setSearchType] = useState('users');
 const [searchTerm, setSearchTerm] = useState('');

 const handleSearchTypeChange = (event) => {
  setSearchType(event.target.value);
  setSearchTerm('');
 };

 const handleSubmit = (event) => {
  event.preventDefault();


  if (searchTerm.trim() === '') {
   alert('Please Enter a Search 🌸 🌺')
  }

  onSearch(searchType, searchTerm);
 };


 const getPlaceholder = () => {
  return searchType === 'users' ? 'Search for users' : 'Search for organizations';
 };

 return (
  <div className='container'>
   <form onSubmit={handleSubmit} className='search-form'>
    <label>
     <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      // required
      className='search-input'
      placeholder={getPlaceholder()}
     />
    </label>
    <div>
     <label>
      <input
       type="radio"
       value="users"
       checked={searchType === 'users'}
       onChange={handleSearchTypeChange}
      />
      Users
     </label>
     <label>
      <input
       type="radio"
       value="organizations"
       checked={searchType === 'organizations'}
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
