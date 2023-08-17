import React, { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);


  const handleSearch = async (searchType, searchTerm) => {
    try {
      setLoading(true)
      let searchUrl;
      if (searchType === 'users') {
        searchUrl = `https://api.github.com/search/users?q=${searchTerm}`;
      } else if (searchType === 'organizations') {
        searchUrl = `https://api.github.com/search/users?q=${searchTerm}+type:org`
      } else {
        console.error('Invalid search type');
        return;
      }

      const response = await fetch(searchUrl);
      const data = await response.json();

      setSearchResults(data.items || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="App">
      <header>
        <h1 className='title'>GitHub Search App 🌸 🧑🏼‍💻</h1>
      </header>
      <SearchForm onSearch={handleSearch} />
      {loading ? (
        <div className="loading-spinner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="#000000"
          >
            <path
              fill="#000000"
              d="M 25 2 C 38.25483 2 48 11.74517 48 25 C 48 38.25483 38.25483 48 25 48 C 11.74517 48 2 38.25483 2 25"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </path>
          </svg>

        </div>
      ) : (
        <SearchResults results={searchResults} />

      )}
      <Footer />
    </div>
  );
};

export default App;
