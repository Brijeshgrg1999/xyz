import React from 'react'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Popular from "./Popular"
import TrendingPage from './TrendingPage';
import HomeNowShowing from '../sections/home/HomeNowShowing';
import '../styles/homeLayout.css';
import HomeHighlights from '../sections/home/HomeHighlights';
import HomeTopRated from '../sections/home/HomeTopRated';
import Footer from '../sections/footer/footer';
import HomeUpcomming from '../sections/home/HomeUpcoming';
import UpcommingSectionRight from '../sections/highlights/UpcommingSectionRight';
import Spacer from '../sections/home/spacer';
import HomePopularPeople from '../sections/home/HomePopularPeople';


function Home() {

  const apiKey = '01b2194e0d3126278b4cd10749993496';
  const [movies, setMovie] = useState();
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState("");
  const buttonRef = useRef(null);
console.log("local", localStorage)

  useEffect(() => {
    async function fetch() {
      await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=1`).then(
        (res) => {

          setMovie(res.data.results);
          setLoading(true)
        }
      )
    }
    fetch();
  }, [])

  useEffect(() => {
    if (buttonRef.current !== null) {
      buttonRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [check]);

  function setValue(data) {
    setCheck(data);
  }

  if (!loading) {
    return (
      <div>loading </div>
    )
  }


  return (
    <>
      <div className='main-wrapper'>
        <div className='mt-0 h-40vh'>
          <Carousel className='h-40vh'
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}>
            {movies.map((movie) => {
              return (
                <>
                  <div className="h-96 ">
                    <img
                      className=""
                      src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}
                      alt={movie ? movie.original_title : ""}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-10">
                      <div className="font-bold text-4xl mb-4 text-white">{movie ? movie.original_title : ""}</div>
                      <div className="text-2xl mb-2 text-white">
                        {movie ? movie.release_date : ""}
                        <span className="ml-6">{movie ? movie.vote_average : ""}<i className="fas fa-star ml-1" /></span>
                      </div>
                      <div className="italic text-sm   text-white ">{movie ? movie.overview : ""}</div>
                    </div>
                  </div>
                </>
              )
            })}
          </Carousel>

        </div>
        <section className='page-content m-5 p-5'>

          {/* now showing section */}
          <div className='container-nowshowing '>
            <HomeNowShowing />
          </div>
          <Spacer height={30}/>
          <div className='container-nowshowing '>
            <HomeUpcomming />
          </div>
          <Spacer height={30}/>
          <div className='container-highlights '>
            <HomeHighlights />
          </div>
          <Spacer height={30}/>
          <div className='container-highlights '>
            <HomeTopRated />
          </div>
          <Spacer height={30}/>
          <div className="container-popularPeople">
            <HomePopularPeople/>
          </div>

        </section>


      </div>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Home; 