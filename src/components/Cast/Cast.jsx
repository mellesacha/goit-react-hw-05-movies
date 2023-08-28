import { useParams } from "react-router-dom";
import { getMovieCast } from "../../service/FetchApi";
import { useState } from "react";
import { CastCard, List } from "./Cast.styled";

const url = "https://image.tmdb.org/t/p/w500";

const Cast = () => {

    const {id} = useParams();
    const [cast, setCast] = useState([]);

    getMovieCast(id).then(({cast}) => setCast(cast));

    return (

        <CastCard>
            {cast.length === 0 ? <p>No information</p> : cast.map(({original_name, character, profile_path, id}) => 
            {return <List key={id}>
                <li><img src={url + profile_path} alt={original_name} width="100"/></li>
                <div>
                <li>{original_name}</li>
                <li>Character: {character}</li>
                </div>
                </List>
            } )}
        </CastCard>
    )

};

export default Cast;