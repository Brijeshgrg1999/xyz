import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const ApiContext = createContext(); 

// Create the API provider component
export const TrendingApiProvider = ({ children }) => {
const apiKey = '01b2194e0d3126278b4cd10749993496' ; 
  const [ trendingData , setTrendingData ] = useState(null);
 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);



  useEffect(() => {
    fetchTrendingData();
  }, []);

  const fetchTrendingData = async () => {
    try {
      setLoading(true);
      // Replace this URL with your actual API endpoint
      const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setTrendingData(result);
      setError(null);
    } catch (err) {
      setError(err.message);
       setTrendingData(null);
    } finally {
      setLoading(false);
    }
  };


  const contextTrendingValue = {
    trendingData,
    loading,
    error,
    
  }; 


  return (
    <ApiContext.Provider value={  contextTrendingValue}>
      {children}
    </ApiContext.Provider>
  );
};