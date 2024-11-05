import React from 'react' ; 
import { Link } from 'react-router-dom';
import '../styles/Circle.css' ; 

import { useState } from 'react';

function Circle({movie}) {
  //creating the hover effect 
  const [isHovered , setHovered ]= useState(false) ; 
  const handleMouseEnter=()=>{
    setHovered(true) ; // now it is hovering 
  }
   const handleMouseLeave =()=>{
    setHovered(false) ; 
   }
  return (

    <Link to={`/movies/${movie.id}`}>

     <div className='circleCard'>
          <img className='image' src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`} />
          <p className='text-xs'>{movie?.title}</p>


     </div>
    </Link>
  )
}

export default Circle ; 