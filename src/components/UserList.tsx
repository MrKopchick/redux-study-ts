import React, { useEffect } from 'react';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../store/action-creators/user';


const UserList: React.FC = () => {
    const { users, error, loading } = useTypeSelector((state: any) => state.user);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    if(loading){
        return <h1>Loading...</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map((user: any) => 
                <div key={user.id}>
                    <h3>{user.name}</h3>
                </div>
            )}
        </div>
    )
}

export default UserList;
