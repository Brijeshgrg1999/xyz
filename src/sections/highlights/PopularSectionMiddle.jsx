import { useContext } from 'react'; 
import { ApiContext } from '../../state/context/PopularMovies';
import { Link } from 'react-router-dom';

function PopularSectionMiddle() {
    const { popularData, loading } = useContext(ApiContext); 

    if (loading) {
        return ( 
            <> 
                Loading...
            </>
        );
    }
    
    return (
        <div className='p-2 mx-2 '>
            {popularData.results.slice(0, 1).map((movie) => (
                <div key={movie.id} className="movie-item mb-4 h-full"> 
                    {/* First section with image and name */}
                    <Link to={`/movies/${movie?.id}`}>
                        {console.log(movie?.id , "debugging ")}
                        <div className="flex justify-center flex-col "> 
                            <img  
                                src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} 
                                className="rounded-lg object-contain" // Adjust size and spacing
                            /> 
                            <p className="text-sm">{movie?.title}</p>
                        </div>
                    </Link> {/* Correctly close the Link here */}
                </div>
            ))}

            {/* Bottom section for list content */}
            {popularData.results.slice(3, 6).map((movie) => (

               
                <div key={movie.id} className="flex flex-row movie-item mb-4 gap-4"> 
                 <Link to={`/movies/${movie.id}`}>
                    <img  
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
                        alt={movie.title} 
                        className="rounded-lg w-40 h-30 object-fill" // Adjust size and spacing
                    /> 

                    <div>
                        <p className="text-m">{movie.title}</p>
                        <p className="text-sm text-gray-500 line-clamp-2 overflow-hidden">{movie.overview}</p>
                    </div>       
                    </Link>                 
                </div>
             
            ))}
        </div>
    );
}

export default PopularSectionMiddle;