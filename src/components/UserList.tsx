import React, { use } from 'react';
import { useTypeSelector } from '../hooks/useTypeSelector';

const UserList: React.FC = () => {
    const { users, error, loading } = useTypeSelector((state: any) => state.user);

    return (
        <div>

        </div>
    )
}

export default UserList;
