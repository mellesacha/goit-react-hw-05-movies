import MovieDetails from "../../components/MovieDetails";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../service/FetchApi";
import { useEffect, useState } from "react";

const MovieCard = () => {

    const [movie, setMovie] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        
        if (!id) {
            return
        }

        getMovieDetails(id).then(results => {
            setMovie(results)
        })
    
    }, [id]);
  

    return (
        <div>
           <Link>Go back</Link>
            <MovieDetails movie={movie} />
            <h3>Additional information</h3>
            <ul>
            <li><Link to="cast">Cast</Link></li>
            <li><Link to="reviews">Reviews</Link></li>
            </ul>
            <Outlet/>
        </div>
    )
};

export default MovieCard;