import { useContext } from 'react'; 
import { ApiContext } from '../../state/context/PopularMovies';


function UpcommingSectionRight() {
    const { upcomingData, loading } =  useContext(ApiContext); 

    return (
      <div className='p-4 mx-5 '>
          {upcomingData?.results.slice(0, 1).map((movie, index) => (
              <div key={movie.id} className="movie-item mb-4 h-full"> {/* Add a unique key and margin for spacing */}
                  {/* First section with image and name */}
                  <div className="flex justify-center flex-col "> {/* Flexbox for layout */}
                      <img  
                          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
                          alt={movie.title} 
                          className="rounded-lg object-contain" // Adjust size and spacing
                      /> 
                      <p className="text-sm text-gray-600">{movie.title}</p>
                  </div>
                  
              </div>
          ))}

              {/* Bottom section for with list  content */}
        {upcomingData?.results.slice(1 , 5).map((movie, index) => (
                      <div key={movie.id} className="flex flex-row movie-item mb-4 gap-4"> 
                      <img  
                          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
                          alt={movie.title} 
                          className=" rounded-lg w-60 h-40 object-fill " // Adjust size and spacing
                      /> 
  
                            <div>
                            <p className="text-m">{movie.title}</p>
                              <p className="text-sm text-gray-500 line-clamp-2 overflow-hidden">{movie.overview}</p>
                              </div>                        
                      </div>
                  ))}
          
      </div>
  );
}

export default UpcommingSectionRight;