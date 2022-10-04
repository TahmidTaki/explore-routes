import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = ({ friend }) => {
    const { id, name, email, username } = friend;
    return (
        <div className='friend'>
            <h2>Friend Id: {id}</h2>
            <p>Friend Name: {name}</p>
            <p><small>Email: {email}</small></p>
            <p>Username: <Link to={`/friend/${id}`}>{username}</Link></p>
        </div>
    );
};

export default Friend;