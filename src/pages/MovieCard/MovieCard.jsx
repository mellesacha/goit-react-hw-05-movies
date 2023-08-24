import MovieDetails from "../../components/MovieDetails";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../service/FetchApi";
import { useEffect, useState } from "react";

const MovieCard = () => {

    const [movie, setMovie] = useState([]);
    const {id} = useParams();
    const location = useLocation();

    const backLinkHref = location.state?.from ?? "";

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
           <Link to={location.state.from}>Go back</Link>
            <MovieDetails movie={movie} />
            <h3>Additional information</h3>
            <ul>
            <li><Link to="cast" state={{from: backLinkHref}}>Cast</Link></li>
            <li><Link to="reviews" state={{from: backLinkHref}}>Reviews</Link></li>
            </ul>
            <Outlet/>
        </div>
    )
};

export default MovieCard;