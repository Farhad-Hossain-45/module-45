import { useLoaderData, useNavigate } from "react-router-dom";

import './PostDestails.css'

const PostDetails = () => {
    const post = useLoaderData()
    const navigate = useNavigate();
    const {id,title,body}= post

    const handelDetails = () => {
        navigate(-1);
    }
    return (
        <div className="post-details">
            <h3>this is post details page:{id}</h3>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={handelDetails}>Go Back</button>
        </div>
    );
};

export default PostDetails;