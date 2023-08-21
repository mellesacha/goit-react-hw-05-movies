
import { getMovieCast } from "../../service/FetchApi";

const Cast = ({ id }) => {

    getMovieCast(id).then(r => console.log(r))

    return (
        <p>hghgh</p>
    )

};

export default Cast;