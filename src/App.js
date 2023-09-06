import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer';
import { USERSTYPE, USERSTYPE2, GITHUB_API_URL } from './constants/USERSTYPE';
import useFetch from './hook/useFetch';


const App = () => {
  const { loading, data, error, fetchData } = useFetch();

  const handleSearch = async (searchType, searchTerm) => {
    try {
      let searchUrl;
      switch (searchType) {
        case USERSTYPE:
          searchUrl = `${GITHUB_API_URL}${searchTerm}`;
          break;
        case USERSTYPE2:
          searchUrl = `${GITHUB_API_URL}${searchTerm}+type:org`;
          break;
        default:
          console.error('Invalid search type');
          return;
      }
      await fetchData(searchUrl);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
    };

  }
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
        <>
          {error ? (
            <div className="error-message">{error}</div>
          ) : (
            <SearchResults results={data?.items || []} />
          )}
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;
