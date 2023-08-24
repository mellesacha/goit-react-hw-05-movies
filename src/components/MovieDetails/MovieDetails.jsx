const MovieDetails = ({ movie }) => {


    const { title, vote_average, overview, poster_path, genres} = movie;
    const url = "https://image.tmdb.org/t/p/w500";
    const score = Math.round(Number(vote_average) * 10);
    // const genresList = genres.map(genre => genre.name).join(', ');
    console.log(genres)
    
    return (
        <div>
            <img src={url + poster_path} alt=""/>
            <h2>{title}</h2>
            <p>User score: {score}%</p>
            <h3>Overview</h3>
            <p>{ overview
            }</p>
            <h3>Genres</h3>
            {/* <p>{genresList}</p> */}
        </div>
    )
};

export default MovieDetails;