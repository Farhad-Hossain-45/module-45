/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    
    const {title,id} = post

    const navigate = useNavigate()

    const handelBtn = () =>{
       navigate(`/post/${id}`)
    }
    return (
        <div className='post-container'>
            <h3>{id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Shoe Post</Link>
            <button onClick={handelBtn}>Show Details Post</button>
        </div>
    );
};

export default Post;