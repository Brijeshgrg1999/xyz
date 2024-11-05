import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ListContext } from '../ListContext';
import Spacer from '../sections/home/spacer';
import "../styles/SingleMovie.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';


function SingleMovie() {
  const { id } = useParams();
  const apiKey = '01b2194e0d3126278b4cd10749993496';
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addMovieToList } = useContext(ListContext);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        console.error('error', error);
        setLoading(false);
      }
    }
    fetchMovieDetails();
  }, [id, apiKey]);

  const handleSaveClick = () => {
    alert("saved sucessfully ! ")
    addMovieToList(movie);
  }

  if (loading) {
    return <div>loading</div>;
  }



  return (
    <div className="container" style={{ margin: "auto" }}>
      <Spacer height={50} />
      <h1 className='text-3xl'>{movie.title}</h1>
      <h4 style={{ color: "grey" }}>{movie.overview} </h4>
      <div className="innerContent mt-5">
        <div className='image'>
          <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
        </div>
        <div className='content'>
          <div>
            <p>status : {movie.status} </p>
            <p> Released date : {movie.release_date.toLocaleString()} </p>
            <p><FontAwesomeIcon icon={faClock} /> {movie.runtime} minutes</p>
          </div>
          <div>
            <div style={{
              border:"2px solid black",
              width : "50%",
              height: "auto",
              padding: ".5rem",
              borderRadius:"10px",
              textAlign:'center'
            }}>
              <button> <FontAwesomeIcon icon={faThumbsUp} /> Like </button>

            </div>
            <div style={{
              border:"2px solid black",
              width : "50%",
              height: "auto",
              padding: ".5rem",
              borderRadius:"10px",
              textAlign:'center'
            }}>
              <button> <FontAwesomeIcon icon={faThumbsDown} /> Dislike </button>
            </div>

          </div>
          <div>
            Genres :
            <p className='rounded-lg border border-10 border-black m-1 text-center'>{movie.genres[0].name}</p>
            <p className='rounded-lg border border-10 border-black   m-1 text-center' >{movie.genres[1].name}</p>
            <p className='rounded-lg border border-10 border-black   m-1 text-center ' >{movie.genres[2].name}</p>

          </div>


        </div>
      </div>
      <div className="mt-5">
        <div className='reviewSection'>
          <input type="text" className='inputText' placeholder='add a review' />
          <button>submit</button>
        </div>

      </div>
      <section>

      </section>
    </div>
  )


}

export default SingleMovie;