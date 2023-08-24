import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../service/FetchApi";
import { useState } from "react";

const Reviews = () => {
    const {id} = useParams();
    const [reviews, setReviews] = useState();

    getMovieReviews(id).then(({results}) => setReviews(results))

    return(
        reviews &&
        <div>
            {reviews.map(({author, content, id}) => {
            return <ul key={id}>
                <li>{author}</li>
                <li>{content}</li>
            </ul>
        })} 
        </div> 
        
    )
}

export default Reviews;