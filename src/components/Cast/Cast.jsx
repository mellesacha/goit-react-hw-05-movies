
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../service/FetchApi";
import { useState } from "react";

const url = "https://image.tmdb.org/t/p/w500";

const Cast = () => {

    const {id} = useParams();
    const [cast, setCast] = useState();

    getMovieCast(id).then(({cast}) => setCast(cast))

    return (

        cast &&
        <div>
            {cast.map(({original_name, character, profile_path, id}) => {return <ul key={id}><li><img src={url + profile_path} alt=""/></li><li>{original_name}</li>{character}<li></li></ul>
            } )}
        </div>
    )

};

export default Cast;