import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.css';

import { useState } from 'react';
import { faCirclePlus, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spacer from '../sections/home/spacer';

function Card({ movie }) {
  //creating the hover effect 
  const [isHovered, setHovered] = useState(false);

  console.log(movie) ; 

  const handleMouseEnter = () => {
    setHovered(true); // now it is hovering 
  }
  const handleMouseLeave = () => {
    setHovered(false);
  }



  
  return (

    <Link to={`/movies/${movie.id}`}>
      <>
        <div className={`main-card rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 ${isHovered ? '-translate-y-5 ease ' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
              <div className='popularity'>
              <FontAwesomeIcon className='mx-1' icon={faStar} />
                {Math.round(movie.vote_average *10)/10}
                </div>
          <img className='w-full h-full object-fill' src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`} />

          {isHovered && (
            <div className='absolute bottom-0 left-0 right-0 bg-white p-4'>
              <h2 className='text-s'>{movie.title}</h2>
              <p className='text-xs'>{movie.overview}</p>
            </div>
          )}


        
        </div>
        <Spacer height={10} />
       
      </>
    </Link>
  )
}

export default Card