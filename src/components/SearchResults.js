import React from 'react';



const SearchResults = ({ results }) => {
 console.log(results);
 return (
  <div className='search-results'>
   <h2>Search Results 💻 🙌🏽</h2>
   <section className='section-container wrapper'>
    {results.map((result, index) => (
     <div key={index} className='card'>
      <img src={result.avatar_url} alt="" />
      <p>{result.login}</p>
      <p>{result.type}</p>
     </div>
    ))}
   </section>
  </div>
 );
};

export default SearchResults;
