import React, { useEffect } from 'react';
import useStore from '../store/useStore';

const Users = () => {
    const { users, fetchUsers, addToFriends } = useStore();

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id} onClick={() => addToFriends(user)}>
                    {user.name}
                </li>
            ))}
        </ul>
    );
};

export default Users;
