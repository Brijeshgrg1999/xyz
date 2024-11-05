import { useContext } from "react";
import { ApiContext } from "../../state/context/UpcommingMovies";
import '../../styles/homeLayout.css';
import { Link } from "react-router-dom";

function HomeUpcomming() {
    const { UpcomingData, loading } = useContext(ApiContext);
    console.log(UpcomingData);
    return (
        <div>
            <h1 className="text-3xl">Comming soon to theaters</h1>
            <p style={{
                color: "grey"
            }}>Explore for upcomming releases</p>
            <div className="upcomming-container ">

                <div className="mainSection">
                    {UpcomingData?.results.slice(0, 1).map((movie, index) => (
                        <Link to={`/movies/${movie.id}`}>
                            <div key={movie.id} className="relative">
                                <img

                                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                    alt={movie.title}
                                    className="upcomming-img rounded-lg  object-cover" // Adjust size and spacing
                                />
                                <p className="text-2xl overlay-text">{movie.title} </p>
                                <p className="overlay-text2">{movie.overview}</p>

                            </div>
                        </Link>


                    ))}


                </div>

                <div className="sideSection">
                    {UpcomingData?.results.slice(1, 4).map((movie, index) => (
                         
                        <Link to={`/movies/${movie.id}`}>
                            <div key={movie.id}> {/* Flexbox for layout */}
                                <img

                                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                    alt={movie.title}
                                    className="h-32 w-72  rounded-lg  object-cover" // Adjust size and spacing
                                />
                                <p className="text-sm">{movie.title}</p>
                            </div>
                        </Link>

                    ))}


                </div>

            </div>
        </div>
    );
}

export default HomeUpcomming;