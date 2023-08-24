import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList";
import {getTopOfDay} from "../../service/FetchApi";

const HomePage = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => { getTopOfDay().then(({ results }) => setMovie(results)) }, []);
    
    return (
            <MovieList movie={movie} />
    )
    
};

export default HomePage;