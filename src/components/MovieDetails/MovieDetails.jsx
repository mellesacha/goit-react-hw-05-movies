const MovieDetails = ({ movie }) => {

    const { title, vote_average, overview, poster_path, id} = movie;
    const url = "https://image.tmdb.org/t/p/w500";
    const score = Math.round(Number(vote_average) * 10);
    
    return (
        <div>
            <img src={url + poster_path} alt=""/>
            <h2>{title}</h2>
            <p>User score: {score}%</p>
            <h3>Overview</h3>
            <p>{ overview
            }</p>
    

        </div>
    )
};

export default MovieDetails;