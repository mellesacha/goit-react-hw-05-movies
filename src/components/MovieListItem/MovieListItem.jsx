import { Link } from "react-router-dom"

const MovieListItem = ({ title }) => {
    return (
        <Link>{title}</Link>
    )
};

export default MovieListItem;