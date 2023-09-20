/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    
    const {title,id} = post
    return (
        <div className='post-container'>
            <h3>{id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Shoe Post</Link>
        </div>
    );
};

export default Post;