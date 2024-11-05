import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const  ApiContext = createContext(); 

// Create the API provider component
export const PopularPeopleApiProvider = ({ children }) => {
const apiKey = '01b2194e0d3126278b4cd10749993496' ; 
  const [ popularPeople , setPopularPeople ] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user , setUser] = useState("brijesh") ; 


  useEffect(() => {

    fetchPopularPeople() ; 
  }, []);


  const fetchPopularPeople = async () => {
    try {
      setLoading(true);
      // Replace this URL with your actual API endpoint
      const response = await fetch(`https://api.themoviedb.org/3/trending/person/week?api_key=${apiKey}&language=en-US`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setPopularPeople(result);
      setError(null);
    } catch (err) {
      setError(err.message);
      setPopularPeople(null);
    } finally {
      setLoading(false);
    }
  };

  const contextPopularValue = {
    popularPeople,
    loading,
    error,
    user
  };

  return (
    <ApiContext.Provider value={ contextPopularValue }>
      {children}
    </ApiContext.Provider>
  );
};