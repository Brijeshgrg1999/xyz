import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/navbar.css';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { userContext } from '../user/state/userContext';

function Navbar() {

  const { user } = useContext(userContext) ; 



  return (
    <div className='flex justify-evenly p-3 navbar-top'>
      <div>
      <Link to='/'>SCREEN SAVY</Link>
      </div>
      <div className=' flex gap-5'>
        <Link to='/tvshow'>TV SHOWS</Link>
        <Link to='/tvepisode'>TOP RATED  </Link>
        <SearchBar />
      </div>
      <div>
      <Link to={user ? "/profile" : "/Register"}>{ user ? user : " Login / Register"} </Link>
      </div>
       
    </div>
  )
}

export default Navbar