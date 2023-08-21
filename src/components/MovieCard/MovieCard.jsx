import MovieDetails from "../MovieDetails";
import Cast from "../../pages/Cast"
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  

    return (
        <div>
           <button type="button"/>
            <MovieDetails movie={movie} />
            <h3>Additional information</h3>
            <Link to={`cast`}>Cast</Link>
        
            
        </div>
    )
};

export default MovieCard;