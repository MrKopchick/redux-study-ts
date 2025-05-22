import React, { use } from 'react';
import { useSelector } from 'react-redux';

const UserList: React.FC = () => {
    const state = useSelector((state: any) => state.user);

    console.log(state);
    return (
        <div>

        </div>
    )
}

export default UserList;
