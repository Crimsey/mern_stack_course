import React from 'react';

import UsersList from "../components/UsersList";

const Users = () => {
    const imgHtml = 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
    const USERS = [
        {
            id: 'u1', name: 'Jakub Sokol', image: imgHtml, places: 3
        }
    ];

    return (
        <UsersList items={USERS}/>
    );
};

export default Users;