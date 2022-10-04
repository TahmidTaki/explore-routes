import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <h3>Post Details</h3>
            <h4>Title: <small>{title}</small></h4>
            <p>Post: {body}</p>

            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            {
                //another option
            }
            <button onClick={handleNavigate}>Go to Detail</button>
        </div>
    );
};

export default Post;