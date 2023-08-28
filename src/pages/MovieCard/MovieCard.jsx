import MovieDetails from "../../components/MovieDetails";
import { Outlet, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../service/FetchApi";
import { Suspense, useEffect, useState } from "react";
import { Container, Card, Button, ListInfo, LinkInfo } from "./MovieCard.styled";

const MovieCard = () => {

    const [movie, setMovie] = useState([]);
    const {id} = useParams();
    const location = useLocation();

    const backLinkHref = location.state?.from ?? "/";

    useEffect(() => {
        
        if (!id) {
            return
        }

        getMovieDetails(id).then(results => {
            setMovie(results)
        })
    
    }, [id]);

    return (
        <Container> 
            <Card>
           <Button to={backLinkHref}>Go back</Button>
            {movie.length !==0 && <MovieDetails movie={movie} />}
            <h3>Additional information</h3>
            <ListInfo>
            <li><LinkInfo to="cast" state={{from: backLinkHref}}>Cast</LinkInfo></li>
            <li><LinkInfo to="reviews" state={{from: backLinkHref}}>Reviews</LinkInfo></li>
            </ListInfo>
            <Suspense>
            <Outlet/>
            </Suspense>
            </Card>
        </Container>
       
    )
};

export default MovieCard;