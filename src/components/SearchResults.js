import React from 'react';

const SearchResults = ({ results }) => {

 return (
  <div className='search-results' >
   <h2>Search Results 💻 🙌🏽</h2>
   <section className='section-container wrapper'>
    {results.map((result, index) => {
     const { avatar_url, login, type } = result;
     return (
      <div key={index} className='card' >
       <img src={avatar_url} alt={login} />
       <p>{login}</p>
       <p>{type}</p>
      </div>
     )
    })}
   </section >
  </div >
 )
};

export default SearchResults;
