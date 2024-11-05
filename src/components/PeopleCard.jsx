import React from 'react'; 
import { Link } from 'react-router-dom';
import '../styles/PeopleCard.css'; 
import userImage from "../assets/user.webp"; // Importing user.webp directly

function PeopleCard({ data }) {
    // Construct the image URL
    let image = data && data.profile_path 
        ? `https://image.tmdb.org/t/p/original${data.profile_path}` 
        : userImage; // Use fallback image if profile_path is null

    return (
        <div className='peopleCard '>
            <img className='image' src={image} alt={ data?.name || "people"} /> {/* Added alt text for accessibility */}
            <p className='text-s'>{data?.name}</p>
        </div>
    );
}

export default PeopleCard;