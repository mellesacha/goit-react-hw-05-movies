import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList";
import {getTopOfDay} from "../../service/FetchApi";
import { Container, Trends } from "./Home.styled";

const HomePage = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => { getTopOfDay().then(({ results }) => setMovie(results)) }, []);
    
    return (
        <Container>
            <Trends>
                <h1>Trending today</h1>
            <MovieList movie={movie} />
            </Trends>
            
        </Container>
            
    )
    
};

export default HomePage;