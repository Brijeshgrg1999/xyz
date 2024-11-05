import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Card from '../../components/Card';
import '../../styles/NowShowing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { userContext } from '../../user/state/userContext';
import { userListContext } from '../../user/features/userWishlist';
import { useQuery } from '@tanstack/react-query';

function HomeNowShowing() {
  const apiKey = '01b2194e0d3126278b4cd10749993496';

  // get the user state from the context 
  const { user } = useContext(userContext);
  const { handleWishlist } = useContext(userListContext);

  //function to fetch the data ; 
  const fetchData = async()=>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`);
    return response.data.results;
  }

  const { isPending , error , data } = useQuery({
    queryKey:['nowShowing'] ,
    queryFn : fetchData 
  }) ; 



  return (
    <div className="main-content" >
      <h1 className='text-3xl'>Now showing in theaters</h1>
      <h2>checkout the new shows </h2>
      <div className='nowShowingContainer flex flex-row justify-between'>
        {data?(data.slice(0, 5).map((movie) => {
          return (
            <div key={movie.id}>
              <Card movie={movie} />
              {console.log(movie)}
              <button className='btnWishList' onClick={() => handleWishlist(user , movie.id , movie.overview , movie.title , movie.poster_path)}> <FontAwesomeIcon icon={faCirclePlus} /> Wishlist </button>
            </div>
          )
        })) : ""
        }
      </div>
    </div>
  );
}
export default HomeNowShowing;
