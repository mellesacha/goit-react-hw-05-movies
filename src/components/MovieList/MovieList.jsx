import MovieListItem from "../MovieListItem";

const MovieList = ({ movie }) => {
    return (
        movie.map(({ id, title }) => {
            return (
                <ul key={id}><MovieListItem title={title} id={ id} /></ul>
        )
            
        })
    )
};

export default MovieList;