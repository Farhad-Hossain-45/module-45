import { useLoaderData } from "react-router-dom";

import './PostDestails.css'

const PostDetails = () => {
    const post = useLoaderData()
    const {id,title,body}= post
    return (
        <div className="post-details">
            <h3>this is post details page:{id}</h3>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;