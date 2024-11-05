import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const ApiContext = createContext(); 

// Create the API provider component
export const UpcomingApiProvider = ({ children }) => {
const apiKey = '01b2194e0d3126278b4cd10749993496' ; 
  const [ UpcomingData , setUpcommingData ] = useState(null);
 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    fetchUpcomingData();
  }, []);

  const fetchUpcomingData = async () => {
    try {
      setLoading(true);
      // Replace this URL with your actual API endpoint
      const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=01b2194e0d3126278b4cd10749993496&language=en-US&page=1`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setUpcommingData(result);
      setError(null);
    } catch (err) {
      setError(err.message);
      setUpcommingData(null);
    } finally {
      setLoading(false);
    }
  };


  const contextUpcomingValue = {
    UpcomingData,
    loading,
    error,
    
  }; 


  return (
    <ApiContext.Provider value={contextUpcomingValue}>
      {children}
    </ApiContext.Provider>
  );
};