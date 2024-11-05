import { useContext } from 'react'; 
import { ApiContext } from '../../state/context/PopularMovies';
import { Link } from 'react-router-dom';


function PopularSectionRight() {
    const { popularData, loading } =  useContext(ApiContext); 
    if(loading){
      return ( 
        <> 
        loading
        </>
      )
    }
    
    return (
      <div className='p-2 mx-2 '>
          {popularData.results.slice(2 , 4).map((movie, index) => (
              <div key={movie.id} className="movie-item mb-4 h-full"> {/* Add a unique key and margin for spacing */}
                  {/* First section with image and name */}
                  <Link to={`/movies/${movie.id}`}>
                  <div className="flex justify-center flex-col "> {/* Flexbox for layout */}
                      <img  
                          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
                          alt={movie.title} 
                          className="rounded-lg object-contain" // Adjust size and spacing
                      /> 
                      <p className="text-sm">{movie.title}</p>
                    
                  </div>
                  </Link>
                  
              </div>
          ))}
      </div>
  );
}

export default PopularSectionRight;