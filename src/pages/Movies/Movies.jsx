import { useEffect, useState } from "react";
import {getMovieByTitle} from "../../service/FetchApi";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList";

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
    }

const handlBtnSearch = () => {
    setSearchParams({query});
    setQuery('');
    
}


    return (
        
        <div>
            <input type="text" 
            value={query}
            onChange={handlInputChange}/>
            <button type="button" 
            onClick={handlBtnSearch}>Search</button>
            <MovieList movie={movie}/>
        </div>         
    )
};

export default Movies;