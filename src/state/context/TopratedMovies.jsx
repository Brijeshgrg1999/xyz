import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const ApiContext = createContext(); 

// Create the API provider component
export const TopRatedProvider = ({ children }) => {
const apiKey = 'df4a800d99ac6acedba3c7e5a50571c6' ; 
  const [ TopRatedData , setTopRatedData ] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetchTopRated() ; 
  }, []);


  const fetchTopRated = async () => {
    try {
      setLoading(true);
      // Replace this URL with your actual API endpoint

      const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`);
      if (!response.ok) {
        console.log("no top rated data");
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setTopRatedData(result);
      setError(null);
    } catch (err) {
      setError(err.message);
      setTopRatedData(null);
    } finally {
      setLoading(false);
    }
  };

  const contextTopRatedValue = {
    TopRatedData,
    loading,
    error,
  };

  return (
    <ApiContext.Provider value={ contextTopRatedValue }>
      {children}
    </ApiContext.Provider>
  );
};