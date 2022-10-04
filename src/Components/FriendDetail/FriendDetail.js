import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friendDetail = useLoaderData();
    return (
        <div>
            <h2><small>Everything you need to know about</small> '{friendDetail.name}'</h2>
            <p>Contact him/her at: {friendDetail.phone}</p>
        </div>
    );
};

export default FriendDetail;