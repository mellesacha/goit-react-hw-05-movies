import { Link } from "react-router-dom";

const MovieList = ({ movie }) => {

    return (
        movie.map(({ id, title }) => {
            return (
                <ul key={id}> <Link to={`/movies/${id}`}>{title}</Link></ul>
        )
            
        })
    )
};

export default MovieList;