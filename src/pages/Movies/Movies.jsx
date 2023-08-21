import { useParams } from "react-router-dom";
import { getTopOfDay } from "../../service/FetchApi";
import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard";

const Movies = () => {
    const [movie, setMovie] = useState([]);
    const {id} = useParams();
    console.log(id)

    useEffect(() => {
        
        if (!id) {
            return
        }

        getTopOfDay().then(({ results }) => {
            setMovie(results.find(r => r.id === Number(id)))
        })
    
    }, [id]);


    
    return (
        id ? <MovieCard movie={movie} /> : <div>
            <input type="text"/>
            <button type="button"/>
        </div>         
    )
};

export default Movies;