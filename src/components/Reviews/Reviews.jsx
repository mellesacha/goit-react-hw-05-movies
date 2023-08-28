import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../service/FetchApi";
import { useState } from "react";
import {Card} from "./Reviews.styled";

const Reviews = () => {
    const {id} = useParams();
    const [reviews, setReviews] = useState([]);

    getMovieReviews(id).then(({results}) => setReviews(results))

    return(
        reviews &&

        <Card>
            {reviews.length === 0 ? <p>No information</p> : reviews.map(({author, content, id}) => {
            return <ul key={id}>
                <li>Author: {author}</li>
                <li>{content}</li>
            </ul>
        })} 
        </Card> 
        
    )
}

export default Reviews;