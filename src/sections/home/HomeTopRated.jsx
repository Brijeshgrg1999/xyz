import React, { useContext } from 'react';
import '../../styles/NowShowing.css';
import { ApiContext } from '../../state/context/TopratedMovies';
import Circle from '../../components/Circle';

function HomeTopRated() {
  const { TopRatedData, loading } = useContext(ApiContext)

  if (loading) {

    return <div>Loading...</div>;
  }

  return (
    <div className="main-content" >
      <h1 className='text-3xl'>Top Rated</h1>
      <h2>checkout the new shows </h2>
      <div className='flex flex-row justify-between  p-2 max-w-full'>

        {TopRatedData ? TopRatedData.results.slice(0, 7).map((movie) => { return <Circle key={movie.id} movie={movie} /> }) : "no data "}


      </div>

    </div>
  );
}

export default HomeTopRated;


