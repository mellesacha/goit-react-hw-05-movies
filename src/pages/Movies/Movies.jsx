import { useEffect, useState } from "react";
import {getMovieByTitle} from "../../service/FetchApi";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList";
import { Container, Form, Button, Input } from "./Movies.styled";

const Movies = () => {

    const [query, setQuery] = useState('');
    const [movie, setMovie] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    
    

useEffect(() => {
        const searchTitle = searchParams.get("query") ?? '';
        if(!searchTitle) {
            return
        }
        getMovieByTitle(searchTitle).then(({results}) => setMovie(results))
       
    }, [searchParams]);

const handlInputChange = (e) => {
        const {value} = e.target;
        setQuery(value);
    };

const handlSearch = (e) => {
    e.preventDefault();
    setSearchParams(query !== '' ? { query } : {});
    setQuery('');
    
};


    return (
        <Container>
            <Form onSubmit={handlSearch}>
            <Input type="text" 
            value={query}
            onChange={handlInputChange}/>
            <Button type="submit">Search</Button>
        </Form>  
        <MovieList movie={movie}/>
        </Container>
        
               
    )
};

export default Movies;