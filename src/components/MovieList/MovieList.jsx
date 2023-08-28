import {  useLocation } from "react-router-dom";
import {List, MovieLink} from "./MovieList.styled";

const MovieList = ({ movie }) => {

    const location = useLocation();

    return (
        movie.map(({ id, title }) => {
            return (
                <List key={id}>
                    <MovieLink to={`/movies/${id}`} state={{from: location}} >{title}</MovieLink>
                    </List>
        )
            
        })
    )
};

export default MovieList;