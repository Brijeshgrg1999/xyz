import {useContext } from 'react' ; 
import { ApiContext } from '../../state/context/TrendingMovies';

function TrendingHome() {
  
    const { trendingData , loading }= useContext(ApiContext) 
    if(loading){
        return ( 
            <div>
                loading
            </div>
        )
    }
    return ( 
        <div className='trendingSection p-4' style={{
          height:"100%"
    
        }}>

          <ul>
            {trendingData?.results?.slice(0,30).map((movie , index ) => (
              <li key={movie.id}>{index + 1 } .  {movie.title}</li>
            ))}
          </ul>
          
      </div>
     );
}

export default TrendingHome; 
