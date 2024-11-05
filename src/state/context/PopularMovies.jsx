import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const ApiContext = createContext(); 

// Create the API provider component
export const PopularApiProvider = ({ children }) => {
const apiKey = '01b2194e0d3126278b4cd10749993496' ; 
  const [ popularData , setPopularData ] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {

    fetchPopularData() ; 
  }, []);


  const fetchPopularData = async () => {
    try {
      setLoading(true);
      // Replace this URL with your actual API endpoint
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setPopularData(result);
      setError(null);
    } catch (err) {
      setError(err.message);
      setPopularData(null);
    } finally {
      setLoading(false);
    }
  };

  const contextPopularValue = {
    popularData,
    loading,
    error,
  };

  return (
    <ApiContext.Provider value={ contextPopularValue }>
      {children}
    </ApiContext.Provider>
  );
};