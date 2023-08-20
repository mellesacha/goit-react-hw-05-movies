import { useState, useEffect } from "react";
import MovieList from "../Movies";
import fetchApi from "../../service/FetchApi";

const HomePage = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => { fetchApi().then(({ results }) => setMovie(results)) }, []);
    

    return (
        <>
            <MovieList movie={movie} />
        </>
    )
    
};

export default HomePage;