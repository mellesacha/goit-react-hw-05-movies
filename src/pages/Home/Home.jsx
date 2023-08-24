import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList";
import {getTopOfDay} from "../../service/FetchApi";
import { useLocation } from "react-router-dom";


const HomePage = () => {

    const [movie, setMovie] = useState([]);
    const location = useLocation();

    useEffect(() => { getTopOfDay().then(({ results }) => setMovie(results)) }, []);
    

    return (
        <>
            <MovieList movie={movie} />
        </>
    )
    
};

export default HomePage;