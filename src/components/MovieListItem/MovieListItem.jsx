import { Link } from "react-router-dom"

const MovieListItem = ({ title, id }) => {
    return (
        <Link to={`/movies/${id}`}>{title}</Link>
    )
};

export default MovieListItem;