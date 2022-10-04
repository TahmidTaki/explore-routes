import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const postDetail = useLoaderData();
    const { id, title, body, userId } = postDetail;
    const n = useNavigate();
    const authorButton = () => {
        n(`/friend/${userId}`)
    }
    return (
        <div>
            <h2>Post Details of ID:== {id}</h2>
            <p></p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
            <button onClick={authorButton}>About the author</button>
        </div>
    );
};

export default PostDetails;