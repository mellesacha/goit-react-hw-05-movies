import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movie }) => {

    const location = useLocation();

    return (
        movie.map(({ id, title }) => {
            return (
                <ul key={id}><Link to={`/movies/${id}`} state={{from: location}}>{title}</Link></ul>
        )
            
        })
    )
};

export default MovieList;