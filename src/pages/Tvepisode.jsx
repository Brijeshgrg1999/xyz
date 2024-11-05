import React from 'react' ; 
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import { RingLoader } from 'react-spinners';

function Tvepisode() {
    const [show , setShow ] = useState([]) ; 
    const apiKey = '01b2194e0d3126278b4cd10749993496' ; 
    const [loading , setLoading ] =useState(true) ; 

    useEffect(() => {
        async function fetchShows() {
           
          await axios.get(` https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`)
            .then((res) => {
              console.log(res.data.results);
              setShow(res.data.results);
              setLoading(false);
            })
            .catch((error) => {
              console.error('Error fetching TV shows:', error);
              setLoading(false);
            });
        }
        fetchShows();
      }, []);
    if(loading)
    {
        return (
          <div className='sweet-loading'>
          <RingLoader
            color={'#123abc'} 
            loading={loading} 
          />
        </div>
        )
    }

  return (
    <div className="grid md:grid-cols-6 gap-5 gap-x-0 sm:grid-cols-2 justify-items-center ml-8 relative mt-[10%]" >
    {show?( show.map((movie)=>{
            return(
                <Card key={movie.id} movie={movie} />
            )
        }) ): ""
       
    }

    </div>
  )
}

export default Tvepisode ; 